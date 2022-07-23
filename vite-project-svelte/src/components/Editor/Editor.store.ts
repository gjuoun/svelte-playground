import { writable } from "svelte/store";

export const textState = writable("");

type EditorState = "edit" | "preview";

export const editorState = writable<EditorState>("edit");
