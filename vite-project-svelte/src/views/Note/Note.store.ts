import { writable } from "svelte/store";

export type Note = {
  id: string;
  title: string;
  text: string;
  createdAt: string;
  updatedAt: string;
};

export const notesState = writable<Note[]>([]);
