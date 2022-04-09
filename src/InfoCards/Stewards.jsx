import { useRecoilValue } from "recoil";
import { InfoCardContainer, InfoCards } from "../PersonInfoCard";
import { stewards } from "../state/stewards";

export function StewardCards() {
  const elect = useRecoilValue(stewards);

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
