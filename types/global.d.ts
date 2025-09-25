import type * as Prisma from "@prisma/client";

declare global {
    interface Contact extends Prisma.Contact {}
    interface User extends Prisma.User {
        posts?: Post[];
    }
    interface Post extends Prisma.Post {
        author: Pick<User, 'name' | 'email'>;
    }
}

export {};