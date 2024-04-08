import { Account } from "./components/Accounts";
import { BlockInfo } from "./components/BlockInfo";
import { Profile } from "./components/Profile";
import { BlockNumber } from "./components/BlockNumber";


export default function HomePage() {
  return (
    <div>
      <h1>Hello World 🙂</h1>
      <h2>Hello 💜</h2>     

      <Account />
      <Profile />
      <BlockNumber />
      <BlockInfo />
      
    
    
    </div>

  );
}
