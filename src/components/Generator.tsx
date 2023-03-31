import styled from "styled-components";
import { device, color, fontSize, fontWeight } from "../theme/theme";
import PatternDivDesk from "../assets/pattern-divider-desktop.svg";
import PatternDivMob from "../assets/pattern-divider-mobile.svg";
import Dice from "../assets/icon-dice.svg";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  width: 40%;
  height: 45%;
  padding: 2.5% 2.5% 4.5%;
  background-color: ${color.darkGrayishBlue};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.75rem;
  position: relative;

  @media ${device.mobile} {
    width: 300px;
    height: 300px;
    padding: 12.5% 5% 15%;
  }
`;

const Title = styled.h4`
  width: 100%;
  flex-grow: 1;
  font-size: ${fontSize.title};
  font-stretch: expanded;
  color: ${color.neonGreen};

  @media ${device.mobile} {
    font-size: ${fontSize.titleM};
  }
`;

const DescContainer = styled.section`
  width: 100%;
  flex-grow: 4;
  display: flex;
  align-items: center;
`

const Description = styled.p`
  width: 100%;
  height: auto;
  font-size: ${fontSize.quote};
  font-weight: ${fontWeight.bold};
  color: ${color.lightCyan};
  
  @media ${device.mobile} {
    font-size: ${fontSize.quoteM};
  }
`;

const DividerDesk = styled.img`
  width: 100%;
  max-height: 16px;
  flex-grow: 2;
  height: 10%;

  @media ${device.mobile} {
    display: none;
  }
`;
const DividerMob = styled.img`
  width: 100%;
  max-height: 14px;
  flex-grow: 2;
  height: 10%;
  display: none;
  
  @media ${device.mobile} {
    display: block;
  }
`

const Randomize = styled.button`
  position: absolute;
  background: url(${Dice}) no-repeat center ${color.neonGreen};
  width: 60px;
  height: 60px;
  bottom: -30px;
  border: none;
  cursor: pointer;
  outline: none;
  border-radius: 50%;
  transition: all 0.25s ease;
  
  &:hover {
    box-shadow: 0 0 40px ${color.neonGreen};
    transition: all 0.25s ease;
  }
`;

interface IAdvices {
  id: number,
  advice: String
}


function Generator() {
  const [advices, setAdvices] = useState<IAdvices>({id: 0, advice: ''});

  const fetchData = () => {
    const data:IAdvices = {id: 0, advice: ""};
    fetch('https://api.adviceslip.com/advice?t=' + Math.random())
      .then(res => {
        if(!res.ok)
          throw new Error("Api connection Problem");
        return res.json();
      }).then(data => {
        setAdvices(data.slip);
      }).catch((e) => {
        console.log(e);
      })

  }
  useEffect(() => {
    fetchData();
  }, []);

  const randomize = () => {
    fetchData();
  }

  return (
    <Wrapper>
      <Title>ADVICE #{advices.id}</Title>
      <DescContainer>
        <Description>
          {advices.advice}
        </Description>
      </DescContainer>
      <DividerDesk src={PatternDivDesk} />
      <DividerMob src={PatternDivMob} />
      <Randomize onClick={randomize} />
    </Wrapper>
  );
}

export default Generator;
