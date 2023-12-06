import { createContext, useContext, useState } from "react";
import { supabase } from "./supabase";
import { useAuth } from "./auth_ctx";
import uuid from 'react-native-uuid';


enum ReportType {
    TimePerHabit = "TimePerHabit",
    Breakthroughs = "Breakthroughs",
    Reflections = "Reflections",
    Streak = "Streak",
}

enum ReportMethod {
    Text = "Text",
    Email = "Email",
    Insta = "Insta",
    NoMethod = "NoMethod",
}

interface Reporter {
    id: string;
    name: string;
    method: ReportMethod;
    handle: string;
    frequencyDays: number;
    reportType: ReportType[];
}

interface ReporterContextData {
    reporters: Reporter[];
    partialReporter?: Partial<Reporter>;
    buildReporter: (partialReporter: Partial<Reporter>) => void;
    addReporter: (reporter: Reporter) => void;
    removeReporter: (reporter: Reporter) => void;
    updateReporter: (reporter: Reporter) => void;
}

interface ReporterContextProps {
    children: React.ReactNode;
}

export const ReporterContext = createContext<ReporterContextData>(
    {} as ReporterContextData
);

export const ReporterProvider: React.FC<ReporterContextProps> = ({
    children,
}) => {
    const [reporters, setReporters] = useState<Reporter[]>([]);
    const [partialReporter, setPartialReporter] = useState<Partial<Reporter> | null>(null);
    const auth = useAuth();

    const buildReporter = (partialReporterUpdate: Partial<Reporter>) => {
        if (partialReporter == null || partialReporter.id == null) {
            setPartialReporter({ id: uuid.v4().toString(), ...partialReporter, ...partialReporterUpdate });
            return;
        }
        setPartialReporter({
            ...partialReporter,
            ...partialReporterUpdate,
        });

        // Check if reporter is complete
        if (partialReporter.name == null || partialReporter.method == null || partialReporter.handle == null || partialReporter.frequencyDays == null || partialReporter.reportType == null) {
            return;
        }

        // Add reporter to state
        console.log("Adding reporter", partialReporter);
        addReporter(partialReporter as Reporter);
    }

    const addReporter = async (reporter: Reporter) => {
        setReporters([...reporters, reporter]);
        const { error } = await supabase.from("reporters").insert({
            id: reporter.id,
            user: auth.user?.id,
            name: reporter.name,
            method: reporter.method,
            handle: reporter.handle,
            frequency: reporter.frequencyDays,
            report_type: reporter.reportType,
        }).select("*");

        if (error) {
            console.error("Error adding reporter", error);
            // Remove reporter from state
            setReporters(reporters.filter((r) => r.id !== reporter.id));
        }
    };

    const removeReporter = async (reporter: Reporter) => {
        setReporters(reporters.filter((r) => r.id !== reporter.id));

        // Remove reporter from DB
        const { error } = await supabase
            .from("reporters")
            .delete()
            .match({ id: reporter.id });

        if (error) {
            console.error("Error removing reporter", error);
            // Add reporter back to state
            setReporters([...reporters, reporter]);
        }


    };

    const updateReporter = async (reporter: Reporter) => {
        setReporters(
            reporters.map((r) => {
                if (r.id === reporter.id) {
                    return reporter;
                }
                return r;
            })
        );

        // Update reporter in DB
        const { error } = await supabase
            .from("reporters")
            .update({
                name: reporter.name,
                method: reporter.method,
                handle: reporter.handle,
                frequency: reporter.frequencyDays,
                report_type: reporter.reportType,
            })
            .match({ id: reporter.id });

        if (error) {
            console.error("Error updating reporter", error);
            // Add reporter back to state
            setReporters([...reporters, reporter]);
        }
    };

    return (
        <ReporterContext.Provider
            value={{
                reporters,
                addReporter,
                removeReporter,
                updateReporter,
                buildReporter,
            }}
        >
            {children}
        </ReporterContext.Provider>
    );
};

export const useReporter = () => useContext(ReporterContext);