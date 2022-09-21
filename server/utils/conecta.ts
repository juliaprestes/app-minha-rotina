import { MongoClient } from "mongodb";
import Config from "../config";

export default async function conectaBanco() {
  const connectionInfo = (await Config.getInstance()).configuration.banco;
  const banco = `mongodb+srv://${connectionInfo.user}:${connectionInfo.pass}@${connectionInfo.url}`;
  const client = new MongoClient(banco);

  await run().catch(console.dir);

  async function run() {
    try {
      // Connect the client to the server (optional starting in v4.7)
      await client.connect();
      // Establish and verify connection
      await client.db("admin").command({ ping: 1 });
      console.log("Connected successfully to server");
    } catch (error) {
      console.error(error);
      await client.close();
    } finally {
      // Ensures that the client will close when you finish/error
      //await client.close();
    }
  }
  return client;
}
