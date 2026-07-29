export type Block =
  | { type: 'p'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'dl'; items: { term: string; text: string }[] }
  | { type: 'table'; head: string[]; rows: string[][] };

export type Section = {
  title: string;
  blocks: Block[];
};

export type LegalDoc = {
  eyebrow: string;
  title: string;
  effective: string;
  notice?: string;
  sections: Section[];
};
