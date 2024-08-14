import { database } from '../database';

export const noteResolvers = {
  notes: async () => {
    const notes = await database.note.findMany();
    return notes.map((note) => ({
      ...note,
      createdAt: note.createdAt.toISOString(),
    }));
  },
  note: async ({ id }: { id: string }) => {
    const note = await database.note.findFirst({
      where: {
        id: id,
      },
    });
    if (!note) {
      throw new Error('note not found');
    }
    return {
      ...note,
      createdAt: note.createdAt,
    };
  },
  createNote: async ({ title, body }: { title: string; body: string }) => {
    const note = await database.note.create({
      data: {
        title: title,
        body: body,
      },
    });
    return {
      ...note,
      createdAt: note.createdAt.toISOString(),
    };
  },
  updateNote: async ({
    id,
    title,
    body,
  }: {
    id: string;
    title: string;
    body: string;
  }) => {
    const note = await database.note.update({
      where: {
        id: id,
      },
      data: {
        title: title,
        body: body,
      },
    });
    return {
      ...note,
      createdAt: note.createdAt.toISOString(),
    };
  },
  deleteNote: async ({ id }: { id: string }) => {
    const note = await database.note.delete({
      where: {
        id: id,
      },
    });
    return {
      ...note,
      createdAt: note.createdAt.toISOString(),
    };
  },
};
