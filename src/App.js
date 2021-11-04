import './App.css';
import { useRef, useState } from 'react';
import { FullPage, Slide } from 'react-full-page';

const delay = ms => new Promise(res => setTimeout(res, ms));

function App() {

  const pageRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);


  const goToPage = (i) => {
    pageRef.current.scrollToSlide(i);
    document.getElementById("ham-menu").checked=false;
  }

  const copy = async() => {
    const copyText = document.getElementById("input-text").innerHTML;
    navigator.clipboard.writeText(copyText);
    document.getElementById("copied").style.opacity=1;
    await delay(1000);
    document.getElementById("copied").style.opacity=0;
    
  }
  return (
    <>
    <div className="minilogo">NNN<img id="logo" src={require('./nonutlogo.svg').default}/></div>
    <nav role="navigation">
  <div id="menuToggle">
    <input id="ham-menu" defaultChecked={menuOpen} onChange={(e)=>setMenuOpen(!menuOpen)} type="checkbox" />
    
    <span></span>
    <span></span>
    <span></span>
    <ul id="menu">
      <a onClick={()=>goToPage(0)}><li>home</li></a>
      <a onClick={()=>goToPage(1)}><li>earn</li></a>
      <a onClick={()=>goToPage(2)}><li>tokenomics</li></a>
      <a onClick={()=>goToPage(3)}><li>roadmap</li></a>
      <a onClick={()=>goToPage(4)}><li>how to buy</li></a>
      <a onClick={()=>goToPage(5)}><li>faq</li></a>
    </ul>
  </div>
</nav>
    <div className="top-bar">
      <div className="top-part"><img id="logo" src={require('./nonutlogo.svg').default}/></div>
      <div className="top-part">
        <a onClick={()=>goToPage(0)} className="top-middle-link">home</a>
        <a onClick={()=>goToPage(1)} className="top-middle-link">earn</a>
        <a onClick={()=>goToPage(2)} className="top-middle-link">tokenomics</a>
        <a onClick={()=>goToPage(3)} className="top-middle-link">roadmap</a>
        <a onClick={()=>goToPage(4)} className="top-middle-link">how to buy</a>
        <a onClick={()=>goToPage(5)} className="top-middle-link">FAQ</a>
      </div>
    </div>
    <img id="bg-image"src={require('./nonut.svg').default}/>
    <FullPage ref={pageRef}>
        <Slide>
          <div className="page-inner">
            <div className="title">NO NUT NOVEMBER<b> TOKEN, BE LIMITLESS.</b></div>
            <div className="desc">
              <div className='descp'><p>The DeFi token, that is made for growth.</p></div>
              <div className='desc-small'>frictionless, yield-generating and neccessary 
                                              to secure and power the NO NUT NOVEMBER ecostystem.
                                          
              </div>
              <div className="two-buttons">
                <a className="href" href="https://t.me/NoNutNovToken">telegram</a>
                <a className="href">pancakeswap</a>
              </div>
              
              <a href="https://twitter.com/NoNutNovToken" className="twitter"><img src={require('./twitter.svg').default}/>@NoNutNovToken</a>
            </div>

          </div>
        </Slide>
        <Slide>
          
        <div className="page-inner pi2">
            <div className="title">NO NUT NOVEMBER MAKES EVERYONE EARN</div>
            <div className="desc">
              <div className='desc-small'>
                Our network ensures, by a 9% fee per transaction of 
                which 4,5% will be distributed among our holders and  
                4,5% locked in liquidity that our holders earn more tokens 
                just by holding $NNN           
              </div>
            <div className="text-left">
              <div class="text-normal"><p>This means...</p></div>
              <div class="text-normal">Liquitidy is being generated automatically by every trade! </div>
              <div class="text-normal">Holders earn more <b>$NNN</b> just by holding!</div>
            </div>
            </div>
          </div>
        </Slide>
        <Slide>
          <div className="page-inner">
            <div className="title">TOKENOMICS</div>
            <div className="columns">
            <div className="left-column">
              <div className="block-title">
                HEALTHY REDISTRIBUTION
              </div>
              
              <div className="block">
                <div className="block-small-title">
                  <p>LIQUIDITY ACCUMULATION</p>
                </div>
                <div className="block-small-text">
                <b>3%</b> Fee on sell trades, added to the liquidity pool by smart contract locked forever. 
                </div>
              </div>

              <div className="block">
                <div className="block-small-title">
                  <p>REFLECTION</p>
                </div>
                <div className="block-small-text">
                <b>3%</b> Fee redistributed to all holders 
                </div>
              </div>
              <div className="block">
              <div className="block-small-title">
                <p>MARKETING WALLET</p>
              </div>
              <div className="block-small-text">
              <b>3%</b> Fee goes to the marketing wallet 
              </div></div>

            </div>
            <div className="right-column">
              <div className="block">
              <div className="block-small-title">
                <p>LOCKED LIQUIDITY</p>
              </div>
              <div className="block-small-text">
              <b>50%</b> permanently locked with BNB on PanCakeSwap to provide initial liquidity
              </div></div>
              <div className="block-small-title">
              <div className="block">
                <p>BURN</p>
              </div>
              <div className="block-small-text">
              <b>30%</b> initially burned 
              </div></div>
            </div>
            </div>

          </div>
        </Slide>
        <Slide>
          <div className="page-inner">
            <div className="title">ROADMAP</div>
            <div className="columns columnsmaller">
            <div className="left-column">
              <div className="block spacedblock">
                <div className="block-small-title">
                  <p><b>NOVEMBER 1ST</b></p>
                </div>
                <div className="block-small-text"><b>WEBSITE LAUNCH</b></div>
                <div className="block-small-text"><b>WHITE PAPER RELEASE</b></div>
                </div>
              <div className="block spacedblock">
              <div className="block-small-title">
                <p><b>1000 HOLDERS</b></p>
              </div>
              <div className="block-small-text"><b>COINGEKO LISTING</b></div>
              <div className="block-small-text"><b>COINMARKETCAP LISTING</b></div>
              <div className="block-small-text"><b>MARKETING CAMPAGNE</b></div>
              </div>
                </div>
            <div className="right-column ">
              <div className="block spacedblock"><div className="block-small-title">
                  <p><b>10000 HOLDERS</b></p>
                </div>
                <div className="block-small-text"><b>MAJOR MARKETING CAMPAGNE</b></div>
                <div className="block-small-text"><b>NO NUT NOVEMBER NFT-RELEASE; SPECIAL ARTIST FEATURES</b></div>
              </div>
              <div className="block spacedblock">
              
              <div className="block-small-title">
                <p><b>20000 HOLDERS</b></p>
              </div>
              <div className="block-small-text"><b>MORE COMING SOON</b></div>
            </div></div>
            </div>

          </div>
        </Slide>
        <Slide>
          <div className="page-inner">
            <div className="title">HOW TO BUY</div>
            <div className="columns">
            <div className="left-column">
              <div className="block-small-title">
                <p><b>HELPFUL LINKS</b></p>
              </div>
                <a className="link">
                  <img className="mimg" src={require("./pcs.png").default}/>
                  <b>Pancake Swap</b>
                  <img className="linkimg" src={require("./link.svg").default}/>
                </a>
                <a className="link">
                  <img className="mimg" src={require("./poocoin.png").default}/>
                  <b>Poocoin</b>
                  <img className="linkimg" src={require("./link.svg").default}/>
                </a>
                <a className="link">
                  <img className="mimg" src={require("./bsc.png").default}/>
                  <b>BSCscan</b>
                  <img className="linkimg" src={require("./link.svg").default}/>
                </a>
                <a className="link">
                  <img className="mimg" src={require("./gecko.png").default}/>
                  <b style={{color:'#EB5C5C'}}>Coingecko</b>
                  <div style={{color:'#92FFB0',fontSize:'12px'}}>Applied</div>
                </a>
                <a className="link">
                  <img className="mimg" src={require("./bagged.png").default}/>
                  <b style={{color:'#EB5C5C'}}>Bogged</b>
                  <div style={{color:'#92FFB0',fontSize:'12px'}}>Applied</div>
                </a>
            </div>
            <div className="right-column righttop">
              <div className="contract">
              <div className="contract-bar-title">contract address</div>
              <div className="contract-bar">
                <div id="copied">copied!</div>
                <button id="input-copy" onClick={()=>copy()}><div id="input-text">9483fh8934h</div><span id="tooltiptext">Click to copy</span></button>
                <button id="copy" onClick={()=>copy()}>copy</button>
              </div>
              <div className="contract-textes">
                <div className="contract-text">1. Deposit BNB in your wallet of choice (MetaMask, TrustWallet etc.)</div>
                <div className="contract-text">2. Click on the <b>PancakeSwap</b> icon on our website</div>
                <div className="contract-text">3. Connect your <b>BSC</b> wallet to PancakeSwap</div>
                <div className="contract-text">4. Set slippage to at least 11% and select the amount of ASTRO you want to buy</div>
                <div className="contract-text">5. Hold onto your Moonzone Token and absorb transaction taxes automatically!</div>
              </div>
              <div className="contract-proof">
              <div className="contract-proof-img"><img className="mimg" src={require("./ownership.svg").default}/></div>
              <div className="contract-proof-right">
              <div className="contract-proof-right-line"><u><b>Proof of Ownership Renouncal</b></u></div>
              <div className="contract-proof-right-line"><u><b>Proof of LP Lock</b></u></div>
              </div>
              </div>
              </div>
            </div>
            </div>

          </div>
        </Slide>
        <Slide>
          <div className="page-inner">
            <div className="title">FAQ</div>
            <div className="columns columns3all">
            <div className="left-column columns3">
              <div className="block spacedblock">
                <div className="block-small-title tsm">
                  <p><b>WHY IS THIS PROJECT RUG-FREE?</b></p>
                </div>
                <div className="block-small-text sm">BECAUSE OUR LIQUIDITY IS LOCKED, DEVELOPERS WILL NOT BE ABLE TO 
                DISABLE TRADING OR PULL THE FUNDS ACCUMULATED INTO THE CONTRACT THROUGH TRADING, WHICH PROVIDES THE VALUE FOR NNN.
                 THIS MEANS THE PLAYING FIELD IS FAIR GAME, AND THE TOKEN CAN GO AS FAR AS THE COMMUNITY, AND THE TEAM WOULD LIKE TO PUSH IT.

                </div>
                <div className="block-small-text sm">FURTHERMORE, THE AGGRESSIVE TAX BEING ADDED TO LIQUIDITY CREATES A LARGER AND LARGER CUSHION, 
                AND REDUCES THE PRICE VOLATILITY AS THE COIN GAINS TRACTION, EFFECTIVELY MAKING TRADING THE TOKEN "COMFIER AND COMFIER".</div>
                </div></div>
            <div className="left-column columns3">
              <div className="block spacedblock">
                <div className="block-small-title tsm">
                  <p><b>WHAT IS NO NUT NOVEMBER?</b></p>
                </div>
                <div className="block-small-text sm">THE NO NUT NOVEMBER TOKEN IS A BEP-20 TOKEN,  THAT WAS CREATED TO BECOME WORLDS BIGGEST MEME TOKEN. 
                </div>
                </div>
                </div>
            <div className="left-column columns3">
              <div className="block spacedblock">
                <div className="block-small-title tsm">
                  <p><b>HOW DO I BECOME A NO NUT SOLIDER?</b></p>
                </div>
                <div className="block-small-text sm">JOIN OUR OFFICIAL TELEGRAM OR DISCORD GROUP TO MEET OUR NO NUT ARMY AND HELP US SPREAD THE WORD!
 
                </div>
                </div>
                </div>
            </div>

          </div>
        </Slide>
      </FullPage>
    </>
  );
}

export default App;
