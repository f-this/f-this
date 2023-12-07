import { Redirect, Stack } from 'expo-router';
import { useAuth } from '../../lib/auth_ctx';
import { Text, View } from 'react-native';
import React from 'react';
import { useProf } from '../../lib/profile_ctx';
import LoadingPage from '../../components/loading';
import { useReporter } from '../../lib/reporting_ctx';

export default function AppLayout() {
    const auth = useAuth();
    const profile = useProf();
    const reporting = useReporter();
    const [isLoading, setIsLoading] = React.useState(false);


    // You can keep the splash screen open, or render a loading screen like we do here.
    if (auth.loading || isLoading) {
        return <LoadingPage />;
    }

    // Only require authentication within the (app) group's layout as users
    // need to be able to access the (auth) group and sign in again.
    if (!auth.user) {
        // On web, static rendering will stop here as the user is not authenticated
        // in the headless Node process that the pages are rendered in.
        return <Redirect href="/0start" />;
    }

    if (!profile.hasProfile() && !isLoading) {
        profile.fetchUserProfile().then(() => {
            reporting.fetchReporters().then(() => {
                setIsLoading(false);
            }).catch((err1) => {
                console.error("Error fetching reporters", err1);
                setIsLoading(false);
            });
        }).catch((err) => {
            console.error("Error fetching user profile", err);
            setIsLoading(false);
        });
        setIsLoading(true);
    }
    else if (profile.hasProfile() && !isLoading && !profile.name) {
        return <Redirect href="/1age" />;
    }


    // This layout can be deferred because it's not the root layout.
    return <Stack screenOptions={{ header: () => null }} />
}
