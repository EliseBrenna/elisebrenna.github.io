import styled from "styled-components";

const StyledMap = styled.div`
  display: flex;
  align-items: flex-end;
  height: 81vh;

  img {
    width: 100%;
    opacity: 90%;
    position: fixed;
    left: 0;
  }

  .pin {
    z-index: 1;
    width: 20px;
    height: 20px;
    border-radius: 50% 50% 50% 0;
    background: #040631;
    position: fixed;
    transform: rotate(-45deg);
    left: 78%;
    top: 59%;
    margin: -20px 0 0 -20px;
    animation-name: bounce;
    animation-fill-mode: both;
    animation-duration: 1s;
  }

  .mojacar {
    left: 62%;
    top: 74%;
  }

  .garrucha {
    left: 57%;
    top: 79%;
  }

  .vera {
    left: 52%;
    top: 95%;
  }

  .cabrera {
    left: 67%;
    top: 81%;
  }

  .losgallardos {
    left: 63.5%;
    top: 93%;
  }

  .antas {
    left: 57%;
    top: 96%;
  }

  .calapanizo {
    left: 42.5%;
    top: 85%;
  }

  .aguilas {
    left: 20.5%;
    top: 85%;
  }

  .pulpi {
    left: 35%;
    top: 96%;
  }

  .sanjuan {
    left: 36%;
    top: 89%;
  }

  .pin-name {
    z-index: 1;
    font-weight: 500;
    font-size: 0.8rem;
    position: fixed;
    left: 76%;
    top: 62%;
    margin: -20px 0 0 -20px;
    animation-name: bouncetext;
    padding: 0.2rem;
    animation-duration: 1s;
    border-radius: 5px;

    :hover {
    }
  }

  .mojacarname {
    left: 61%;
    top: 77%;
  }

  .garruchaname {
    left: 55.5%;
    top: 82%;
  }

  .veraname {
    left: 51.5%;
    top: 98%;
  }

  .cabreraname {
    left: 65.8%;
    top: 84%;
  }

  .losgallardosname {
    left: 61%;
    top: 96%;
  }

  .antasname {
    left: 56.3%;
    top: 99%;
  }

  .calapanizoname {
    left: 40.7%;
    top: 88%;
  }

  .aguilasname {
    left: 19.5%;
    top: 88%;
  }

  .pulpiname {
    left: 34.5%;
    top: 99%;
  }

  .sanjuanname {
    left: 31.5%;
    top: 92%;
  }

  @keyframes bouncetext {
    0% {
      opacity: 0;
    }
    60% {
      opacity: 0;
    }
    80% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes bounce {
    0% {
      opacity: 0;
      transform: translateY(-2000px) rotate(-45deg);
    }
    60% {
      opacity: 1;
      transform: translateY(30px) rotate(-45deg);
    }
    80% {
      transform: translateY(-10px) rotate(-45deg);
    }
    100% {
      transform: translateY(0) rotate(-45deg);
    }
  }
`;

export default StyledMap;
