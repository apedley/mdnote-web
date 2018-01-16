export interface InputDialog {
  title: string;
  content: string;
  response: string | null;
}

export interface ConfirmationDialog {
  title: string;
  content: string;
}

export interface ShareDialog {
  title: string;
  url: string;
  fullUrl: string;
}
