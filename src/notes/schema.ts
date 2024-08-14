export const NOTE_SCHEMA = `
type Query {
  notes: [Note]
}
  
type Mutation {
  createNote(title: String!, body: String!): Note
  updateNote(id: String!, title: String!, body: String!): Note
  deleteNote(id: String!): Note
}

type Note {
  id: String!
  title: String!
  body: String!
  createdAt: String!
}
`;
