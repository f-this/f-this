import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "./supabase";
import { User } from "@supabase/supabase-js";

export interface UserContextData {
  id: string | null;
  phone: string | null;
  name: string | null;
  interests: string[] | null;
  locationEnabled: boolean;
  spotifyEnabled: boolean;
  notificationsEnabled: boolean;
  age: string | null;
  userProfile: User | null;
  addiction: string | null;
  alternative: string | null;
  storeLocal: (data: Partial<UserContextData>) => void;
  updateUserProfile: (data: Partial<UserContextData>) => Promise<any>;
  fetchUserProfile: () => Promise<any>;
}

interface ProfileContextProps {
  children: React.ReactNode;
}

export const ProfileContext = createContext<UserContextData>(
  {} as UserContextData
);

export const ProfileProvider: React.FC<ProfileContextProps> = ({
  children,
}) => {
  const [userProfile, setUserProfile] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [alternative, setAlternative] = useState("");
  const [addiction, setAddiction] = useState("");
  const [interests, setInterests] = useState([""]);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [spotifyEnabled, setSpotifyEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    // get session data if there is an active session
    (async () => {
      const res = await supabase.auth.getUser();
      setUserProfile(res.data.user ?? null);
      setLoading(false);
    })();

    // listen for changes to auth
    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUserProfile(session?.user ?? null);
        setLoading(false);
      }
    );

    // cleanup the useEffect hook
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const value = {
    id: userProfile?.id || null,
    phone,
    name,
    interests,
    locationEnabled,
    spotifyEnabled,
    notificationsEnabled,
    age,
    userProfile,
    addiction,
    alternative,
    fetchUserProfile: async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (user) {
          const { data, error } = await supabase
            .from("users")
            .select("*")
            .eq("id", user.id)
            .single();

          if (data) {
            setUserProfile(data);
            console.log(data);
          } else {
            console.error("Error fetching user profile: No data found");
          }
        } else {
          console.error("No user data available.");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }

      setLoading(false);
    },
    storeLocal: (data: Partial<UserContextData>) => {
      if (data.age) {
        setAge(data.age);
      }
      if (data.phone) {
        setPhone(data.phone);
      }
      if (data.name) {
        setName(data.name);
      }
      if (data.interests) {
        setInterests(data.interests);
      }
      if (data.locationEnabled !== undefined) {
        setLocationEnabled(data.locationEnabled);
      }
      if (data.spotifyEnabled !== undefined) {
        setSpotifyEnabled(data.spotifyEnabled);
      }
      if (data.notificationsEnabled !== undefined) {
        setNotificationsEnabled(data.notificationsEnabled);
      }
      if (data.addiction) {
        setAddiction(data.addiction);
      }
      if (data.alternative) {
        setAlternative(data.alternative);
      }
      console.log("Storing local data:", data);
    },
    updateUserProfile: async (data: Partial<UserContextData>) => {
      let fallbackUser = (await supabase.auth.getUser()).data.user;
      if (userProfile || fallbackUser) {
        try {
          let updateData = {
            id: userProfile ? userProfile.id : fallbackUser?.id,
            phone: phone,
            name: name,
            age: age,
            interests: interests,
            location: locationEnabled,
            spotify: spotifyEnabled,
            notifications: notificationsEnabled,
          };
          const { error } = await supabase
            .from("users")
            .update(updateData)
            .eq("id", userProfile ? userProfile.id : fallbackUser?.id);
          if (error) {
            console.error("Error updating user profile:", error);
          }
        } catch (error) {
          console.error("Error updating user profile:", error);
        }
      }
    },
  };

  return (
    <ProfileContext.Provider value={value}>
      {!loading && children}
    </ProfileContext.Provider>
  );
};

export const useProf = () => {
  return useContext(ProfileContext);
};
