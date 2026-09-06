import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { DocPage } from './components/DocPage'
import { CONTACT, DOMAIN } from './config'

function Privacy() {
  return (
    <DocPage title="Privacy policy" updated="7 September 2026">
      <p className="text-muted">
        Applies to the Flintgrab desktop application and the Flintgrab browser extension.
      </p>

      <h2>The short version</h2>
      <p>
        Flintgrab runs on your computer. Nothing you download — no URL, no filename, no site, no
        file — is ever sent anywhere. There is no account and no profile.
      </p>
      <p>
        The free version shows one sponsor panel inside the application. Serving it means the
        application makes two kinds of request to us: it downloads a list of adverts, which is the
        same file for everybody and carries nothing about you, and it reports how many times each
        advert was shown and clicked, as daily totals with no identifier attached. Buying a licence
        removes the panel and both requests along with it.
      </p>
      <p>
        That, plus the licence check described below, is the entire extent of what leaves your
        machine. The rest of this page explains it in detail.
      </p>

      <h2>What stays on your machine</h2>
      <p>
        The application stores the following locally, in your Windows user profile, and nowhere
        else:
      </p>
      <ul>
        <li>
          Your download history, meaning the URL, title, file size, destination path, and state of
          each download.
        </li>
        <li>
          Your settings, meaning the download folder, connection limits, speed limits, and similar
          preferences.
        </li>
        <li>The files you download.</li>
        <li>
          Application logs, used for diagnosing problems. Cookie values, <strong>Authorization</strong>{' '}
          headers and signed-URL parameters are filtered out of logs before they are written.
        </li>
      </ul>
      <p>
        You can clear the history, revoke stored browser sessions, and reset all settings from{' '}
        <strong>Settings, then Privacy</strong> inside the app. Uninstalling asks whether to remove
        this data and never removes the files you downloaded.
      </p>

      <h2>Your activation key and the email you send</h2>
      <p>
        Buying a licence is one email exchange. We receive the address you write from and reply to
        it with payment details and a key. That address is used to send you the key, to reissue it
        if you change machines, and for nothing else. It is not added to a mailing list, not shared,
        and not sold.
      </p>
      <p>
        When you enter a key, the application sends the key and a machine identifier to our licence
        server. That identifier is a one-way hash of your Windows installation ID, your computer
        name and your username, truncated to 32 characters. It cannot be reversed into any of those,
        and it exists for one purpose: so that one key activates one machine. It is never sent with
        anything to do with adverts, and it is never used to build any record of what you do.
      </p>
      <p>
        The application repeats that check about once a week to confirm the licence is still valid.
        If it cannot reach us, nothing happens — it keeps working, and it keeps working for at least
        two weeks offline before it even mentions it. A network problem never removes a licence you
        paid for.
      </p>

      <h2>Cookies and browser sessions</h2>
      <p>This is the part that matters most, so it is written out in full.</p>
      <p>
        When you start a download from the browser extension, the extension reads the cookies your
        browser already holds for that page and sends them to the desktop application over Chrome’s
        native messaging channel, a direct local pipe between the extension and the app on the same
        computer. It does not travel over the internet.
      </p>
      <p>The application then:</p>
      <ul>
        <li>
          Holds those cookies <strong>in memory only</strong>. They are never written to disk.
        </li>
        <li>
          Attaches them to <strong>one specific download</strong>, not to your session generally, so
          they cannot be reused for a later download you did not start.
        </li>
        <li>
          Discards them when that download finishes, fails, or is cancelled, and when the app quits,
          since memory does not survive it.
        </li>
        <li>
          Re-checks that the cookies belong to the same site as the media being fetched, and drops
          them if they do not.
        </li>
      </ul>
      <p>
        Those cookies are sent to the website you are downloading from, and to nobody else. That is
        the same website your browser was already sending them to.{' '}
        <strong>Settings, then Privacy, then Revoke all</strong> clears every held session
        immediately.
      </p>

      <h2>What the extension’s permissions are for</h2>
      <ul>
        <li>
          <strong>Cookies</strong>, to read your session for the page you are downloading from, as
          described above.
        </li>
        <li>
          <strong>Access to all sites</strong>, because Flintgrab cannot know in advance which sites
          you will want to download from, so it cannot list them. The extension only acts on a page
          when you click its button, or when a download you started matches your own interception
          rules.
        </li>
        <li>
          <strong>Downloads</strong>, to notice a download your browser is starting so it can be
          handed to Flintgrab instead, if you have enabled that.
        </li>
        <li>
          <strong>Native messaging</strong>, to talk to the desktop application on your computer.
        </li>
        <li>
          <strong>Storage</strong>, to remember your extension settings.
        </li>
        <li>
          <strong>Tabs</strong>, to know the address of the page you are currently looking at when
          you open the panel.
        </li>
        <li>
          <strong>Alarms</strong>, to periodically re-check that the desktop application is still
          reachable.
        </li>
      </ul>
      <p>
        The extension does not read page content for any purpose other than finding media on it, and
        it has no network connection to us at all. It talks to the desktop application on your own
        computer and to nothing else. The licence and advert requests described below are made by
        the application, never by the extension.
      </p>

      <h2>Network connections Flintgrab makes</h2>
      <ul>
        <li>
          <strong>To the sites you download from.</strong> Direct, from your computer. Those sites
          see your IP address and request headers exactly as they would if you had used your
          browser. Nothing is proxied through us.
        </li>
        <li>
          <strong>To fetch updates to its extraction tool.</strong> Video sites change how they serve
          media constantly, so Flintgrab periodically downloads a new build of the open-source tool
          it uses for extraction. That request reveals your IP address to whoever hosts that
          download, and nothing about what you have downloaded.
        </li>
        <li>
          <strong>To check for application updates.</strong> Same shape: a request for a version
          number, revealing your IP address to the host and nothing else.
        </li>
        <li>
          <strong>To check your licence, if you bought one.</strong> The key and the machine
          identifier described above, about once a week. Nothing else.
        </li>
        <li>
          <strong>To fetch the list of adverts, in the free version only.</strong> The application
          downloads a single file from {DOMAIN} every few hours. It is a static file, identical for
          every user in the world, requested with no query string, no cookie, and no identifier of
          any kind. Advert images are downloaded from the same address and stored on your machine.{' '}
          <strong>Advertisers never receive a request from your computer</strong> — we host their
          images ourselves specifically so they cannot see your IP address or count you. If you
          click an advert it opens in your browser, and from that point the advertiser sees an
          ordinary visitor, exactly as if you had typed the address in yourself.
        </li>
        <li>
          <strong>To report advert counts, in the free version only.</strong> Every few hours the
          application sends a short message saying, for each advert, how many times it was shown and
          clicked and on what date. It contains no machine identifier, no licence key, no
          installation ID, no session ID, no time of day, and nothing whatsoever about what you have
          downloaded. A typical message is four lines of JSON and looks the same coming from every
          copy of Flintgrab.
        </li>
      </ul>
      <p>
        <strong>About IP addresses.</strong> Any request over the internet reveals your IP address
        to whoever receives it. That is how the internet works and no software can avoid it. Ours
        reaches the service that hosts our site, which derives a two-letter country code from it so
        we can tell an advertiser which countries their campaign reached. The address itself is
        never written down, never stored, and never associated with an advert count, a licence, or
        another request. We can record that Germany saw four thousand adverts on a given day. We
        cannot record that you did.
      </p>
      <p>
        For torrent transfers, BitTorrent works by connecting your computer directly to other peers.
        Those peers can see your IP address. That is how the protocol works, not a Flintgrab
        behaviour, and it is why peer discovery can be turned off in <strong>Settings</strong>.
      </p>

      <h2>Analytics and telemetry</h2>
      <p>
        There is no analytics library in Flintgrab, no crash reporter, and no usage tracking.
        Nothing measures which features you use, how long you use the application, how many
        downloads you start, which sites you visit, what fails, or when you open it. There is no
        setting to enable any of that, because none of it exists.
      </p>
      <p>
        The advert counts described above are the only numbers we receive, and they are counts of
        adverts, not counts of you. They tell us an advert was shown eight thousand times yesterday.
        They cannot tell us it was shown to you, or that the same person saw it twice, and it is
        built that way so that we could not find out.
      </p>
      <p>
        <strong>We do not measure unique users, and that is a choice with a cost.</strong>{' '}
        Advertisers ask for it. Answering would mean putting a persistent identifier on every
        installation, which is the thing this entire page exists to say we do not do. So we sell
        adverts by the number of times they are shown over a period, and we tell advertisers exactly
        what we are telling you.
      </p>

      <h2>Children</h2>
      <p>
        Flintgrab is not directed at children under 13 and collects no data from anyone, including
        them.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        If this policy changes in a way that affects what happens to your data, the change will be
        dated here and noted in the application’s release notes. A change that introduced any
        collection of personal data would be announced before it shipped, not after.
      </p>
      <p>
        This page was updated on <strong>7 September 2026</strong> to describe the sponsor panel in
        the free version and the licence check, ahead of the release that introduces them. That
        release is the next one, and it is not out yet. The version you can download today makes
        neither request.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
      </p>
    </DocPage>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Privacy />
  </StrictMode>
)
