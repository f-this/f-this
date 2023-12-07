import { createContext, useContext, useState } from "react";
import { supabase } from "./supabase";
import { useAuth } from "./auth_ctx";
import uuid from 'react-native-uuid';


export enum ReportType {
    TimePerHabit = "TimePerHabit",
    Breakthroughs = "Breakthroughs",
    Reflections = "Reflections",
    Streak = "Streak",
}

export enum ReportMethod {
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
    clearReporter: () => void;
    addReporter: (reporter: Reporter) => void;
    removeReporter: (reporter: Reporter) => void;
    updateReporter: (reporter: Reporter) => void;
    fetchReporters: () => Promise<void>;
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

    const clearReporter = () => {
        setPartialReporter(null);
    }

    const fetchReporters = async () => {
        const { data, error } = await supabase
            .from("reporters")
            .select("*")
            .match({ user: auth.user?.id });

        if (error) {
            console.error("Error fetching reporters", error);
            return;
        }

        if (data) {
            const newReps = data.map((r) => {
                return {
                    id: r.id,
                    name: r.name,
                    method: r.method,
                    handle: r.handle,
                    frequencyDays: r.frequency,
                    reportType: r.report_type,
                } as Reporter;
            });
            setReporters(newReps);
            console.log("Fetched reporters", newReps);
        }
    }

    const buildReporter = (partialReporterUpdate: Partial<Reporter>) => {
        if (partialReporter == null || partialReporter.id == null) {
            console.log("Creating new reporter");
            const newReporter = { id: uuid.v4().toString(), ...partialReporter, ...partialReporterUpdate };
            console.log("New reporter", newReporter);
            setPartialReporter(newReporter);
            return;
        }

        const newRep =
        {
            ...partialReporter,
            ...partialReporterUpdate,
        };

        setPartialReporter(newRep);
        console.log("Updating reporter with", partialReporterUpdate);

        // Check if reporter is complete
        if (newRep == null) {
            console.log("No name");
        } if (newRep == null) {
            console.log("No method");
        } if (newRep == null) {
            console.log("No handle");
        } if (newRep == null) {
            console.log("No frequency");
        } if (newRep == null) {
            console.log("No report type");
        }

        if (newRep.name != null && newRep.method != null && newRep.handle != null && newRep.frequencyDays != null && newRep.reportType != null) {
            console.log("Reporter complete");
            // Add reporter to state
            console.log("Adding reporter", newRep);
            addReporter(newRep as Reporter);
            // Clear partial reporter   
            setPartialReporter(null);
        }



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
                clearReporter,
                fetchReporters,
            }}
        >
            {children}
        </ReporterContext.Provider>
    );
};

export const useReporter = () => useContext(ReporterContext);

export let frequencyMap: { [key: string]: number } = {
    "Daily": 1,
    "Weekly": 7,
    "Monthly": 30,
    "Bi-yearly": 180,

}

export let daysMap: { [key: number]: string } = {
    1: "Daily",
    7: "Weekly",
    30: "Monthly",
    180: "Bi-yearly",
}