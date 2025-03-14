import { Textlink } from '@/components/ui/textlink';

export function Footer() {
  return (
    <div>
      <div className="bg-petroleum-700 gap flex flex-col gap-10 py-24 text-white md:gap-20">
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-10 px-5 md:flex-row md:px-10 xl:px-12">
          <nav className="w-full text-sm">
            <div className="text-petroleum-100 text-lg uppercase">Ressurser</div>
            <ul className="my-5 list-none">
              <li className="mb-4">
                <Textlink href="/knowledge-hub" size="sm" color="white">
                  Knowledge hub
                </Textlink>
              </li>
              <li className="mb-4">
                <Textlink href="/support/faq" size="sm" color="white">
                  Ofte stilte spørsmål
                </Textlink>
              </li>
              <li className="mb-4">
                <Textlink href="/support/produktkataloger" size="sm" color="white">
                  Produktkataloger
                </Textlink>
              </li>
              <li className="mb-4">
                <Textlink href="https://mysite.sleipnergroup.com/" size="sm" color="white" target="_blank">
                  mySite
                </Textlink>
              </li>
            </ul>
          </nav>
          <nav className="w-full text-sm">
            <div className="text-petroleum-100 text-lg uppercase">Om Sleipner</div>
            <ul className="my-5 list-none">
              <li className="mb-4">
                <Textlink href="/dette-er-sleipner" size="sm" color="white">
                  Vår historie
                </Textlink>
              </li>
              <li className="mb-4">
                <Textlink href="/patenter" size="sm" color="white">
                  Patenter
                </Textlink>
              </li>
              <li className="mb-4">
                <Textlink href="/dette-er-sleipner/jobbe-pa-sleipner" size="sm" color="white">
                  Karriere på Sleipner
                </Textlink>
              </li>
              <li className="mb-4">
                <Textlink href="/sustainability" size="sm" color="white">
                  Sustainability
                </Textlink>
              </li>
              <li className="mb-4">
                <Textlink href="/dette-er-sleipner/batmesser" size="sm" color="white">
                  Finn oss på messer
                </Textlink>
              </li>
              <li className="mb-4">
                <Textlink href="/support/presse" size="sm" color="white">
                  Presse
                </Textlink>
              </li>
            </ul>
          </nav>
          <nav className="w-full text-sm">
            <div className="text-petroleum-100 text-lg uppercase">Utforsk</div>
            <ul className="my-5 list-none">
              <li className="mb-4">
                <Textlink href="/fritidsbat/baug-og-hekkthruster-for-fritidsbad" size="sm" color="white">
                  Thruster
                </Textlink>
              </li>
              <li className="mb-4">
                <Textlink href="/fritidsbat/ankervinsj" size="sm" color="white">
                  Ankervinsj
                </Textlink>
              </li>
              <li className="mb-4">
                <Textlink href="/fritidsbat/fremdrift" size="sm" color="white">
                  Fremdrift
                </Textlink>
              </li>
              <li className="mb-4">
                <Textlink href="/fritidsbat/styring" size="sm" color="white">
                  Styring
                </Textlink>
              </li>
              <li className="mb-4">
                <Textlink href="/fritidsbat/stabilisatorsystem-for-fritidsbat/stabilisatorer" size="sm" color="white">
                  Stabilisatorer
                </Textlink>
              </li>
            </ul>
          </nav>
        </div>
        <div className="mx-auto flex w-full max-w-screen-xl flex-col gap-10 px-5 md:flex-row md:px-10 xl:px-12">
          <nav className="mr-0 w-full text-sm md:mr-10 md:w-[200%]">
            <div className="text-petroleum-100 text-lg uppercase">Følg oss</div>
            <ul className="mt-6 flex list-none flex-wrap gap-8">
              <li className="mb-4">
                <Textlink
                  href="https://www.linkedin.com/company/sleipnerofficial"
                  target="_blank"
                  size="sm"
                  color="white"
                >
                  LinkedIn
                </Textlink>
              </li>
              <li className="mb-4">
                <Textlink href="https://www.facebook.com/sleipnernorge" target="_blank" size="sm" color="white">
                  Facebook
                </Textlink>
              </li>
              <li className="mb-4">
                <Textlink href="https://www.youtube.com/c/SidepowerTV/featured" target="_blank" size="sm" color="white">
                  YouTube
                </Textlink>
              </li>
              <li className="mb-4">
                <Textlink href="https://www.instagram.com/sleipner_official" target="_blank" size="sm" color="white">
                  Instagram
                </Textlink>
              </li>
              <li className="mb-4">
                <Textlink
                  href="https://info.sleipnergroup.com/subscribe-to-our-newsletter-int"
                  target="_blank"
                  size="sm"
                  color="white"
                >
                  Nyhetsbrev
                </Textlink>
              </li>
            </ul>
          </nav>
          <div className="w-full text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width=" 81" height="40" fill="none" viewBox="0 0 81 40">
              <path
                fill="#fff"
                d="M1.012 37.981a6.654 6.654 0 0 1-.346-.407c.082-.044 1.68-.842 1.68-.842.839 1.026 1.831 1.557 3.132 1.557 1.523 0 2.31-.754 2.31-1.9 0-.924-.479-1.455-1.864-1.73l-1.062-.186c-2.31-.429-3.49-1.506-3.49-3.407 0-2.12 1.64-3.421 4.175-3.421 1.796 0 3.114.649 4.037 1.831 0 0-1.46.726-1.672.829-.585-.59-1.365-.95-2.468-.95-1.37 0-2.157.565-2.157 1.609s.616 1.42 1.901 1.677l1.062.223c2.378.462 3.455 1.524 3.455 3.422 0 2.224-1.59 3.714-4.33 3.714-2.003 0-3.167-.695-4.363-2.019Zm11.025 1.814V27.85h1.934v10.234h4.86v1.71h-6.794Zm8.781 0V27.85h7.649v1.71h-5.715v3.32h5.184v1.71h-5.184v3.492h5.715v1.71h-7.649v.003Zm9.639 0V38.22h1.626v-8.795h-1.626V27.85h5.202v1.575h-1.642v8.795h1.642v1.575h-5.202Zm7.637 0V27.85h5.132c2.19 0 3.473 1.421 3.473 3.594 0 2.172-1.282 3.593-3.473 3.593h-3.198v4.755h-1.934v.003Zm1.934-6.45h3.08c.975 0 1.557-.532 1.557-1.488v-.821c0-.957-.582-1.488-1.557-1.488h-3.08v3.799-.003Zm12.015-.155-1.318-2.531h-.052v9.136h-1.849V27.85h2.157l3.902 6.605 1.318 2.532h.051v-9.14H58.1v11.945h-2.157l-3.901-6.604.002.002Zm9.01 6.605V27.85H68.7v1.71h-5.714v3.32h5.183v1.71h-5.183v3.492H68.7v1.71h-7.648v.003Zm12.084 0h-1.934V27.85h5.15c2.14 0 3.455 1.385 3.455 3.594 0 1.695-.802 2.875-2.326 3.319l2.583 5.03h-2.157l-2.396-4.825h-2.377v4.824l.002.003Zm3.08-6.45c.975 0 1.558-.532 1.558-1.488v-.821c0-.957-.583-1.488-1.558-1.488h-3.08v3.799h3.08v-.003ZM40.432 0l3.72 7.387a5.686 5.686 0 0 0-7.44 0L40.433 0Z"
              ></path>
              <path
                fill="#fff"
                d="m20.092 10.208 16.826 8.465a12.897 12.897 0 0 1 0-16.903l-16.826 8.438Zm40.63 0-16.8 8.465a12.897 12.897 0 0 0 0-16.903l16.8 8.438Z"
              ></path>
              <path fill="#fff" d="m40.391 20.391-3.72-7.387a5.686 5.686 0 0 0 7.44 0l-3.72 7.387Z"></path>
            </svg>
            <p className="mt-5">
              Arne Svendsensgate 6-8
              <br />
              1610 Fredrikstad, Norge
            </p>
            <p className="mt-5">
              Telefon: +47 69 30 00 60
              <br />
              Registreringsnummer: 932 455 463
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
