import { createContext, useContext, useState, useEffect } from "react";
import { supabase } from "./supabase";
import { User } from "@supabase/supabase-js";


export interface UserAddictionData {
  id?: string;
  addiction?: string;
  alternative?: string;
  createdAt?: string;
  days: string;
}

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
  storeLocal: (data: Partial<UserContextData>) => void;
  updateUserProfile: (data: Partial<UserContextData>) => Promise<any>;
  fetchUserProfile: () => Promise<any>;
  hasProfile: () => boolean;
  ////////////////////////////////////////////////////////////////////////////////////
  addictionData: UserAddictionData | null;
  updateUserAddictionData: () => Promise<any>;
  fetchUserAddictionData: () => Promise<any>;
  storeLocalAddictionData: (data: Partial<UserAddictionData>) => void;
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
  let [createdAt, setCreatedAt] = useState<string | null>(null);
  let loadingInt = false;

  const [userAddictionData, setUserAddictionData] = useState<UserAddictionData | null>(null);

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

  function calculateDays(date: string | undefined) {
    if (date) {
      const today = new Date();
      const date2 = new Date(date);
      const diffTime = Math.abs(today.getTime() - date2.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays.toString();
    }
    return "0";
  }

  const value: UserContextData = {
    id: userProfile?.id || null,
    phone,
    name,
    locationEnabled,
    spotifyEnabled,
    notificationsEnabled,
    age,
    userProfile,
    addictionData: userAddictionData,
    interests,
    fetchUserProfile: async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (user) {
          // Assuming that the 'id' field in the users table corresponds to the user ID
          const { data } = await supabase
            .from("users")
            .select("*")
            .eq("id", user.id)
            .single();



          if (data) {
            setUserProfile(data);
            setName(data.name);
            setPhone(data.phone);
            setUserAddictionData(data.addiction);
            setAge(data.age);
            setSpotifyEnabled(data.spotifyEnabled);
            setNotificationsEnabled(data.notificationsEnabled);
            setLocationEnabled(data.locationEnabled);
            setCreatedAt(data.created_at);
            setInterests(data.interests);

            await value.fetchUserAddictionData();

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
      if (data.locationEnabled !== undefined) {
        setLocationEnabled(data.locationEnabled);
      }
      if (data.spotifyEnabled !== undefined) {
        setSpotifyEnabled(data.spotifyEnabled);
      }
      if (data.notificationsEnabled !== undefined) {
        setNotificationsEnabled(data.notificationsEnabled);
      }
      if (data.interests) {
        setInterests(data.interests);
      }
      if (data.addictionData) {
        setUserAddictionData(data.addictionData);
      }
    },
    updateUserProfile: async () => {
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
          // Delete any null or undefined values
          let cleanData = Object.fromEntries(
            Object.entries(updateData).filter(([_, v]) => v != null)
          );
          const { error } = await supabase
            .from("users")
            .upsert(cleanData)
            .eq("id", userProfile ? userProfile.id : fallbackUser?.id);
          if (error) {
            console.error("Error updating user profile:", error);
          }
        } catch (error) {
          console.error("Error updating user profile:", error);
        }
      }
    },
    hasProfile: () => {
      return createdAt !== null;
    },
    updateUserAddictionData: async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (user && !loadingInt) {
          loadingInt = true;
          // Assuming that the 'id' field in the users table corresponds to the user ID
          const submit = {
            addiction: userAddictionData?.addiction,
            alternative: userAddictionData?.alternative,
            user_id: user.id,
            id: userAddictionData?.id,
          };

          // Delete any null or undefined values
          const cleanData = Object.fromEntries(
            Object.entries(submit).filter(([_, v]) => v != null || v === user.id)
          );

          const { data, error } = await supabase
            .from("user_addictions")
            .upsert(cleanData)

          if (error) {
            console.error("Error updating user addiction data:", error);
          }

        }

        loadingInt = false;
      } catch (error) {
        console.error("Error fetching addiction data:", error);
      }
    },
    fetchUserAddictionData: async () => {
      try {
        const {
          data: { user },
          error,
        } = await supabase.auth.getUser();

        if (user) {
          // Assuming that the 'id' field in the users table corresponds to the user ID
          const { data, error } = await supabase
            .from("user_addictions")
            .select("*")
            .eq("user_id", user.id)

          console.log(data);

          if (data) {
            setUserAddictionData({
              id: data[0].id,
              addiction: data[0].addiction,
              alternative: data[0].alternative,
              createdAt: data[0].created_at,
              days: calculateDays(data[0].created_at)
            });
          } else {
            console.error("Error fetching user profile: No data found");
          }
        } else {
          console.error("No user data available.");
        }
      } catch (error) {
        console.error("Error fetching addiction data:", error);
      }
    },
    storeLocalAddictionData: (data: Partial<UserAddictionData>) => {
      if (data.addiction) {
        setUserAddictionData({
          id: userAddictionData?.id,
          addiction: data.addiction,
          alternative: userAddictionData?.alternative,
          createdAt: userAddictionData?.createdAt,
          days: calculateDays(userAddictionData?.createdAt)
        });
      }
      if (data.alternative) {
        setUserAddictionData({
          id: userAddictionData?.id,
          addiction: userAddictionData?.addiction,
          alternative: data.alternative,
          createdAt: userAddictionData?.createdAt,
          days: calculateDays(userAddictionData?.createdAt)
        });
      }
    }
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
