import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
      --red: #e52e4d;
      --green: #33cc95;
      --blue: #5429cc;
      --blue-light: #6933ff;

      --text-title: #363f5f;
      --text-body: #969cb3;

      --input-color: #e7e9ee;
      --input-border-color: #d7d7d7;

      --background: #f0f2f5;
      --shape: #ffffff;

      --container: 1120px;
      --border-radius: 0.25rem;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      @media(max-width: 1080px) {
        font-size: 93.75%;
      }

      @media(max-width: 720px) {
          font-size: 87.5%;
      }
    }

    body {
      background: var(--background);
      -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
      font-family: 'Poppins', sans-serif;
      font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong, b {
      font-weight: 600;
    }

    button {
      cursor: pointer;
    }

    [disabled] {
      cursor: not-allowed;
      opacity: 0.6;
    }

    .react-modal-overlay {
      background: rgba(0,0,0,0.5);

      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    .react-modal-content {
      width: 100%;
      max-width: 576px;
      background-color: var(--background);
      padding: 3rem;
      position: relative;
      border-radius: var(--border-radius);

      @media (max-width: 720px) {
        border-radius: 0;
        height: 100%;
        padding: 1rem;
      }
    }
`;
