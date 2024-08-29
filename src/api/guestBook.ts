import { supabase } from "../supabase/config";

type GuestBookInsert = {
  name: string;
  password: string;
  content: string;
};

type GuestBook = {
  id: number;
  name: string;
  content: string;
  created_at: string;
};

export const fetchEntries = async (): Promise<GuestBook[]> => {
  try {
    const { data, error } = await supabase
      .from("guest_book")
      .select("id, name, content, created_at")
      .order("created_at", { ascending: false });

    if (error) {
      throw new Error(error.message);
    }

    return data as GuestBook[];
  } catch (err) {
    console.error(err);
    return [];
  }
};

export const insertGuestBook = async (guestBook: GuestBookInsert) => {
  try {
    const { error } = await supabase.from("guest_book").insert([guestBook]);

    if (error) {
      throw new Error(error.message);
    }
  } catch (err) {
    console.error(err);
  }
};
