import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "./supabase";
import { User } from "@supabase/supabase-js";

interface UserContextData {
  id: string | null;
  phone: string | null;
  name: string | null;
  interests: string[] | null;
  locationEnabled: boolean;
  spotifyEnabled: boolean;
  notificationsEnabled: boolean;
  age: string | null;
  userProfile: User | null;
  storeLocal: (data: Partial<UserContextData>) => void;
  updateUserProfile: (data: Partial<UserContextData>) => Promise<any>;
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
  const [interests, setInterests] = useState([""]);
  const [locationEnabled, setLocationEnabled] = useState(false);
  const [spotifyEnabled, setSpotifyEnabled] = useState(false);
  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  useEffect(() => {
    // get session data if there is an active session
    supabase.auth.getUser().then((res) => {
      setUserProfile(res.data.user ?? null);
      setLoading(false);
    });

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
    id: userProfile?.id || "",
    phone,
    name,
    interests,
    locationEnabled,
    spotifyEnabled,
    notificationsEnabled,
    age,
    userProfile,
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
    },
    updateUserProfile: async (data: Partial<UserContextData>) => {
      if (userProfile) {
        try {
          const { data, error } = await supabase
            .from("users")
            .upsert([{ ...userProfile, id: userProfile.id }]);

          if (error) {
            console.error("Error updating user profile:", error);
          } else {
            // Update the local state with the new data
            setUserProfile((prevProfile) => ({
              ...prevProfile,
              ...userProfile,
            }));
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
