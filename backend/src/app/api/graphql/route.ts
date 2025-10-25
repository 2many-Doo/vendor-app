import { NextRequest } from 'next/server';
import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { connectDataBase } from '@/database/connectDatabase';
import { typeDefs } from '@/schema'; 
import { resolvers } from '@/resolvers';

connectDataBase();

const server = new ApolloServer({
  typeDefs, 
  resolvers,
});

const handler = startServerAndCreateNextHandler(server);

export async function GET(request: NextRequest) {
  return handler(request);
}

export async function POST(request: NextRequest) {
  return handler(request);
}
