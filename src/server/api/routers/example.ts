/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { prisma } from "../../../utils/prisma";
import { createTRPCRouter, protectedProcedure, publicProcedure } from "../trpc";

import { z } from "zod";
if (!process.env.OPENAI_API_KEY) {
  throw new Error("Missing Environment Variable OPENAI_API_KEY");
}

// @TODO: unit test this. good case for unit testing

export const mainRouter = createTRPCRouter({
  getallmessage: protectedProcedure.query(async ({ ctx }) => {
    const data = await prisma.messages.findMany({
      where: { userId: ctx.session.user.id },
    });
    const data_bot = await prisma.botMessges.findMany();
    const f_data = data.concat(data_bot);
    // console.log(data);
    return {
      data: f_data,
      text: "succes",
    };
  }),
  // getAllbotm: publicProcedure
  //   .input(z.object({ userId: z.string() }))
  //   .query(async ({ input }) => {
  //     const data = await prisma.botMessges.findMany({
  //       where: { usersId: input.userId },
  //     });
  //     // console.log(data);
  //     return {
  //       data: data,
  //       text: "succes",
  //     };
  //   }),
  createM: protectedProcedure
    .input(z.object({ message: z.string() }))
    .mutation(async ({ input, ctx }) => {
      const succes = await prisma.messages.create({
        data: { message: input.message, userId: ctx.session.user.id },
      });

      return {
        text: succes.message,
      };
    }),
  createBotM: publicProcedure
    .input(
      z.object({ message: z.string(), userId: z.string(), usersId: z.string() })
    )
    .mutation(async ({ input }) => {
      const succes = await prisma.botMessges.create({
        data: input,
      });
      console.log(succes);
      return {
        text: succes.message,
      };
    }),
});
