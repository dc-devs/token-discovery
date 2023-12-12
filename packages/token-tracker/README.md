<!-- README copied from https://raw.githubusercontent.com/othneildrew/Best-README-Template/master/README.md -->

<!-- PROJECT Header -->
<br />
<div align="center">
  <!-- PROJECT LOGO -->
  <!-- <a href="">
    <img src="" alt="Logo" width="419" height="128">
  </a> -->

  <h1 align="center">
	  Token Tracker
  </h1>
  <p align="center">
	A bot that listens to new token pairs being added to various dex liquidity pools.
  </p>
  <br />
  <a href="https://lucid.app/lucidchart/f3dc82d7-f3ab-4c91-9edb-26982da26ed2/edit?viewport_loc=14%2C-687%2C2219%2C1061%2C0_0&invitationId=inv_687e7557-94f1-4b49-9d4d-e9acef156e0c" target="_blank">Lucid Chart / App Flow</a>
  ·
  <a href="https://github.com/dc-devs/token-tracker/issues" target="_blank">Report Bug</a>
  ·
  <a href="https://github.com/dc-devs/token-tracker/issues" target="_blank">Request Feature</a>
</div>

<!-- TABLE OF CONTENTS -->
<br/>
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#useful-links">Useful Links</a></li>
  </ol>
</details>
<br/>

<!-- ABOUT THE PROJECT -->

## About The Project

This project holds code for a bot that listens to new token pairs being added to various dex liquidity pools.

<p align="right">(<a href="#top">back to top</a>)</p>

### Built With

-   [Yarn](https://yarnpkg.com/)
-   [TypeScript](https://www.typescriptlang.org/)
-   [Prettier](https://prettier.io/)

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

-  yarn: [Install Instructions](https://classic.yarnpkg.com/en/docs/install#mac-stable)

-   `.env.local` file:

    Create an [Infura](https://www.infura.io/) account, as well get an API key from [De.fi](de.fi), and add it to your .env.local in root of project.

    ```
    INFURA_PROJECT_ID = <Infura Project Id>
    INFURA_PROJECT_API_SECRET = <Infura API Secret>
    ```

### Installation

1.  Clone the repo
    ```sh
      git clone git@github.com:dc-devs/token-tracker.git
    ```

    ```sh
      cd token-tracker
    ```

2.  Install NPM packages
    ```sh
    yarn install
    ```
<!-- Usage -->

## Usage
Below are the the instructions for kicking off the app as a whole, as well as for runing each module in the app individually.

### App
Runs the below modules in succession and outputs a security audit for each new token pair added to a UniSwap liquidity pool.

```
yarn start
```

### Token Pair Tracker
Sets a listener for new token pair liquidity pools created on UniSwap, outputs some basic information about the token pair.

```
yarn tokenPairTracker
```