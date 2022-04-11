import { useRecoilValue } from "recoil";
import { InfoCardContainer, InfoCards } from "../PersonInfoCard";
import { officials } from "../state/officials";

export function ElectedCards() {
  const elect = useRecoilValue(officials);

  return (
    <InfoCardContainer>
 
      {elect.map((item) => (
        <InfoCards
          name={item.name}
          email={item.email}
          title={item.title}
          position={item.position}
        />
      ))}
      
    </InfoCardContainer>
  );
}
