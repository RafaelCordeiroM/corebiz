import './Footer.css';


const Footer = () => {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        {/*  /////////////// COL 1 /////////////////// */}
                        <div className="col col-1">
                            <div className="col-content">
                            <div className="title-header">
                                <span>Localização</span>
                                <div className="divider"></div>
                            </div>
                            <div className="address">
                                
                                <span> Avenida Andrômeda, 2000. Bloco 6 e 8 </span>

                                <span>Alphavile SP</span>

                                <span>brasil@corebiz.ag</span>

                                <span>+55 11 3090 1039</span>
                            </div>
                            </div>
                        </div>
                        {/*  /////////////// COL 2 /////////////////// */}
                        <div className="col col-2">
                        <div className="col-content">

                            <button className="contato">
                                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.2337 0.666626H1.72725C0.798681 0.666626 0.047382 1.42663 0.047382 2.35551L0.0389404 12.4888C0.0389404 13.4177 0.798681 14.1777 1.72725 14.1777H15.2337C16.1623 14.1777 16.9221 13.4177 16.9221 12.4888V2.35551C16.9221 1.42663 16.1623 0.666626 15.2337 0.666626ZM15.2338 4.04448L8.48054 8.2667L1.72729 4.04448V2.35559L8.48054 6.57781L15.2338 2.35559V4.04448Z" fill="black"/>
                                </svg>
                                <span className="text">ENTRE EM CONTATO</span>
                            </button>
                            <button className="consultor">
                                <div className="btn-content">
                                    <div className="icon-div">
                                        <svg width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.16881 0.133301C3.97336 0.133301 0.571411 3.53641 0.571411 7.7333V13.6444C0.571411 15.0462 1.70258 16.1777 3.10388 16.1777H5.63635V9.42219H2.25972V7.7333C2.25972 4.4653 4.90193 1.82219 8.16881 1.82219C11.4357 1.82219 14.0779 4.4653 14.0779 7.7333V9.42219H10.7013V16.1777H14.0779V17.0222H8.16881V18.7111H13.2337C14.635 18.7111 15.7662 17.5795 15.7662 16.1777V7.7333C15.7662 3.53641 12.3643 0.133301 8.16881 0.133301Z" fill="black"/>
                                        </svg>
                                    </div>
                                    <span className="text">FALE COM O NOSSO CONSULTOR ONLINE</span>
                                </div>
                            </button>
                        </div>
                        </div>
                        {/*  /////////////// COL 3 /////////////////// */}
                        <div className="col col-3">
                        <div className="col-content">

                            <div className="content-logos">

                            <div className="corebiz">
                                <span>
                                    Created by
                                </span>
                                <br />
                                <svg width="76" height="18" viewBox="0 0 76 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M58.8507 17.9565H56.1884V5.44262H58.8507V17.9565Z" fill="white"/>
                                    <path d="M5.77868 8.00846C5.36706 8.00255 4.95883 8.08753 4.58027 8.25793C4.20171 8.42833 3.86122 8.68037 3.58072 8.99783C2.98221 9.65016 2.68296 10.5525 2.68296 11.6941C2.68296 12.8357 2.98221 13.7598 3.59104 14.423C3.87586 14.7443 4.22128 14.9992 4.60513 15.1714C4.98898 15.3437 5.40278 15.4295 5.81996 15.4233C6.60421 15.4233 7.23367 15.195 7.70835 14.7492C8.14965 14.3438 8.47485 13.8166 8.64739 13.2271L11.0001 14.1295C10.6906 15.1841 10.0921 16.0974 9.20462 16.8584C8.31718 17.6195 7.1924 18 5.81996 18C4.16891 18 2.78615 17.402 1.67169 16.1952C0.55723 14.9884 0 13.488 0 11.6941C0 9.87847 0.546911 8.37811 1.65105 7.19304C2.75519 6.00797 4.11731 5.41 5.75805 5.41C7.16144 5.41 8.30686 5.79053 9.1943 6.55158C10.0357 7.24827 10.6403 8.2133 10.9176 9.30225L8.51324 10.2264C8.36888 9.62441 8.06037 9.08015 7.6258 8.66079C7.17279 8.2259 6.56396 8.00846 5.77868 8.00846Z" fill="white"/>
                                    <path d="M15.4177 14.3904C15.7144 14.7067 16.0675 14.958 16.4568 15.1299C16.846 15.3017 17.2637 15.3907 17.6858 15.3917C18.1078 15.3927 18.5259 15.3057 18.9159 15.1358C19.3059 14.9658 19.6601 14.7162 19.9581 14.4013C20.5773 13.7381 20.8868 12.8248 20.8868 11.6398C20.8868 10.4764 20.5773 9.57405 19.9581 8.92172C19.3524 8.29464 18.5371 7.94327 17.6879 7.94327C16.8387 7.94327 16.0235 8.29464 15.4177 8.92172C14.7986 9.57405 14.489 10.4764 14.489 11.6398C14.489 12.8031 14.7986 13.7272 15.4177 14.3904ZM17.6879 5.41C19.4112 5.41 20.8353 5.9971 21.9497 7.1713C23.0642 8.34549 23.6317 9.83499 23.6317 11.6506C23.6317 13.4663 23.0745 14.9558 21.9497 16.1409C20.8249 17.3259 19.4112 17.913 17.6879 17.913C15.9853 17.913 14.5716 17.3259 13.4468 16.1409C12.322 14.9558 11.7648 13.4554 11.7648 11.6506C11.7648 9.84586 12.322 8.35637 13.4468 7.1713C14.5716 5.98623 15.975 5.41 17.6879 5.41Z" fill="white"/>
                                    <path d="M30.5765 5.48611V8.34549C30.2861 8.29856 29.993 8.27313 29.6993 8.26939C27.6768 8.26939 26.6758 9.31312 26.6758 11.6289V17.913H23.9929V5.44262H26.6036V7.4431C26.8603 6.81344 27.3062 6.29009 27.8729 5.95361C28.4772 5.58429 29.1659 5.3963 29.8644 5.41C30.1037 5.40784 30.3425 5.43336 30.5765 5.48611Z" fill="white"/>
                                    <path d="M34.2397 10.3677H40.2145C40.205 10.0159 40.1278 9.66968 39.9877 9.35013C39.8476 9.03057 39.6474 8.74428 39.3993 8.50858C38.8936 8.00846 38.161 7.7584 37.2116 7.7584C36.3448 7.7584 35.6431 8.01933 35.1169 8.54119C34.5906 9.06306 34.2913 9.67625 34.2397 10.3677ZM40.5344 13.4337L42.98 14.1839C42.6291 15.2602 41.979 16.1517 41.0194 16.8584C40.0597 17.5651 38.8833 17.913 37.4799 17.913C35.7463 17.913 34.281 17.3368 33.0737 16.1952C31.8663 15.0536 31.2575 13.5207 31.2575 11.5963C31.2575 9.7915 31.8457 8.30201 33.0221 7.14956C34.1373 6.01616 35.6313 5.3912 37.1807 5.41C39.0484 5.41 40.5034 5.96449 41.556 7.06258C42.6085 8.16067 43.1337 9.65016 43.1337 11.5245C43.1337 12.0246 43.1131 12.3182 43.0615 12.416H34.1665C34.1776 12.8367 34.2735 13.2501 34.4479 13.6287C34.6222 14.0074 34.871 14.3426 35.1777 14.6122C35.8204 15.1919 36.6434 15.5016 37.4892 15.482C39.0484 15.4885 40.07 14.8036 40.5344 13.4337Z" fill="white"/>
                                    <path d="M46.4266 17.9565H43.7023V0H46.4472V7.23001C46.7361 6.72989 47.2108 6.30587 47.8712 5.96883C48.5804 5.61625 49.3574 5.44136 50.1414 5.45784C51.8441 5.45784 53.1752 6.03407 54.1349 7.19739C55.0946 8.36071 55.5693 9.83933 55.5693 11.6441C55.5693 13.4815 55.0636 14.9819 54.0627 16.1669C53.0617 17.352 51.7202 17.9282 50.0486 17.9282C48.3769 17.9282 47.1695 17.3085 46.4266 16.0582V17.9565ZM51.8647 14.4013C52.4529 13.7272 52.7418 12.814 52.7418 11.6615C52.7418 10.5091 52.4529 9.60667 51.875 8.94346C51.2972 8.28026 50.5336 7.95409 49.5842 7.95409C48.6658 7.95409 47.9125 8.28026 47.314 8.94346C46.7155 9.60667 46.4266 10.5091 46.4266 11.6615C46.4266 12.814 46.7258 13.7055 47.314 14.3904C47.9022 15.0754 48.6658 15.4124 49.5842 15.4124C50.5232 15.4124 51.2765 15.0754 51.8647 14.4013Z" fill="white"/>
                                    <path d="M71.44 17.9456H59.6969V15.4885L67.1163 7.92148H59.5731V5.44262H71.4194V7.82798L63.9071 15.4603H71.44V17.95V17.9456Z" fill="white"/>
                                    <path d="M72.7502 17.4251C72.5721 17.2433 72.4314 17.0253 72.3368 16.7846C72.2423 16.5438 72.1958 16.2854 72.2003 16.0253C72.1957 15.7635 72.2421 15.5035 72.3366 15.2611C72.4312 15.0187 72.5719 14.7988 72.7502 14.615C72.9217 14.4247 73.1297 14.2743 73.3605 14.1735C73.5913 14.0727 73.8398 14.0238 74.0899 14.0299C74.5962 14.0305 75.0816 14.2409 75.4396 14.615C75.7976 14.989 75.999 15.4962 75.9995 16.0253C76.0054 16.2866 75.9586 16.5463 75.8622 16.7875C75.7657 17.0286 75.6217 17.2459 75.4396 17.4251C75.2631 17.6107 75.0526 17.7572 74.8207 17.8559C74.5888 17.9546 74.3403 18.0035 74.0899 17.9997C73.8409 18.0044 73.5936 17.9559 73.3632 17.8571C73.1329 17.7583 72.9242 17.6113 72.7502 17.4251Z" fill="#BFBFBF"/>
                                    </svg>
                            </div>
                            <div className="vtex">
                                <span>
                                    Powered by
                                </span>
                                <br />

                                <svg width="53" height="19" viewBox="0 0 53 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M37.7959 7.28871H35.9252V13.6829C35.9252 13.8026 35.8222 13.9052 35.7021 13.9052H34.2605C34.1403 13.9052 34.0374 13.8026 34.0374 13.6829V7.28871H32.1495C32.098 7.28871 32.0294 7.27162 31.9951 7.23742C31.9607 7.20323 31.9264 7.15194 31.9264 7.08355V5.95517C31.9264 5.90388 31.9436 5.83549 31.9951 5.8013C32.0294 5.7671 32.098 5.73291 32.1495 5.75001H37.7959C37.916 5.75001 38.019 5.83549 38.019 5.95517V7.08355C38.019 7.20323 37.916 7.28871 37.7959 7.28871Z" fill="white"/>
                                    <path d="M43.8027 13.8539C43.0647 13.9565 42.3096 14.0077 41.5716 13.9906C40.1471 13.9906 38.8943 13.6316 38.8943 11.6313V7.98969C38.8943 5.98937 40.1643 5.64744 41.5888 5.64744C42.3267 5.63034 43.0647 5.68163 43.8027 5.78421C43.9571 5.80131 44.0258 5.8697 44.0258 6.00647V7.03227C44.0258 7.15195 43.9228 7.25453 43.8027 7.25453H41.4858C40.9709 7.25453 40.7821 7.4255 40.7821 8.00679V8.9984H43.7169C43.837 8.9984 43.94 9.10098 43.94 9.22066V10.2636C43.94 10.3832 43.837 10.4858 43.7169 10.4858H40.7821V11.6484C40.7821 12.2126 40.9709 12.4007 41.4858 12.4007H43.8027C43.9228 12.4007 44.0258 12.5032 44.0258 12.6229V13.6487C44.0258 13.7684 43.9571 13.8368 43.8027 13.8539Z" fill="white"/>
                                    <path d="M52.1092 13.9052H50.3587C50.2385 13.9223 50.1184 13.8539 50.0669 13.7342L48.5395 11.3407L47.1665 13.6829C47.0979 13.8197 47.012 13.9052 46.8919 13.9052H45.2615C45.2272 13.9052 45.1757 13.9052 45.1414 13.871C45.107 13.8368 45.0899 13.8026 45.0899 13.7513C45.0899 13.7171 45.107 13.7 45.107 13.6829L47.4926 9.71646L45.0727 5.95518C45.0555 5.93808 45.0555 5.90389 45.0555 5.88679C45.0555 5.80131 45.1414 5.73292 45.2272 5.75002H47.0292C47.1493 5.75002 47.2351 5.8526 47.3038 5.95518L48.7111 8.17775L50.0841 5.95518C50.1356 5.8355 50.2385 5.76711 50.3587 5.75002H51.9891C52.0749 5.75002 52.1607 5.80131 52.1607 5.88679C52.1607 5.90389 52.1436 5.93808 52.1436 5.95518L49.7408 9.75066L52.2465 13.6829C52.2637 13.7171 52.2809 13.7513 52.2809 13.7855C52.2637 13.8539 52.2122 13.9052 52.1092 13.9052Z" fill="white"/>
                                    <path d="M29.2834 5.76712C29.1976 5.76712 29.1289 5.81841 29.1118 5.9039L27.5157 11.8023C27.4985 11.922 27.4642 11.9732 27.3612 11.9732C27.2583 11.9732 27.2239 11.922 27.2068 11.8023L25.6107 5.9039C25.5935 5.81841 25.5249 5.76712 25.4391 5.76712H23.8601C23.8086 5.76712 23.7572 5.78422 23.7228 5.83551C23.6885 5.8697 23.6713 5.92099 23.6885 5.97228C23.6885 5.97228 25.645 12.7426 25.6622 12.811C25.9196 13.6145 26.5546 14.0078 27.3612 14.0078C28.1335 14.0419 28.8372 13.5461 29.0603 12.811C29.0946 12.7255 30.9996 5.97228 30.9996 5.97228C31.0168 5.92099 30.9996 5.8697 30.9653 5.83551C30.931 5.80132 30.8795 5.76712 30.828 5.76712H29.2834Z" fill="white"/>
                                    <path d="M20.359 0.279053H3.93474C3.33406 0.279053 2.78487 0.603891 2.49311 1.0997C2.18419 1.6126 2.16703 2.24518 2.44163 2.75808L4.0892 5.86969H1.10297C0.725399 5.86969 0.364991 6.05775 0.159044 6.38259C-0.0469032 6.70743 -0.0469034 7.11775 0.124719 7.45968L5.4107 17.41C5.59948 17.769 5.97705 17.9913 6.37179 17.9913C6.76652 17.9913 7.14409 17.769 7.33287 17.41L8.7745 14.7087L10.5765 18.111C10.8683 18.658 11.4518 19 12.0697 19C12.6875 19 13.271 18.658 13.5628 18.111L21.8007 2.6726C22.0753 2.15969 22.0581 1.54421 21.7492 1.0655C21.4746 0.569697 20.9426 0.279053 20.359 0.279053ZM13.0136 6.79291L9.40951 13.529C9.28937 13.7684 9.0491 13.9052 8.7745 13.9052C8.49991 13.9052 8.25963 13.7513 8.1395 13.529L4.58691 6.8613C4.48394 6.65614 4.48393 6.41678 4.60407 6.21162C4.72421 6.00646 4.94732 5.88678 5.17043 5.88678H12.4472C12.6703 5.88678 12.8763 5.98936 12.9793 6.17743C13.1166 6.36549 13.1166 6.60485 13.0136 6.79291Z" fill="white"/>
                                </svg>

                            </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;