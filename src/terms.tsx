import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { DocPage } from './components/DocPage'
import { CONTACT, PRICE } from './config'

function Terms() {
  return (
    <DocPage title="Terms of use" updated="7 September 2026">
      <p>
        These terms cover the Flintgrab desktop application and browser extension. Installing or
        using either means you accept them.
      </p>

      <h2>Licence</h2>
      <p>
        Flintgrab is licensed to you, not sold. You may install and use it on computers you control.
        You may not resell it, redistribute it, decompile it, or remove or obscure its notices.
      </p>
      <p>
        Flintgrab is <strong>free to use indefinitely</strong>, with no feature withheld and no cap
        on quality, count, or speed. The free version displays a single sponsor panel inside its own
        window, described below. New installations may choose {PRICE.trialDays} days without that
        panel, once per machine, with no key and no payment details.
      </p>
      <p>
        A key costs <strong>{PRICE.amount}</strong>, paid once. The licence it grants is perpetual:
        there is no renewal, no subscription, and no expiry. Its only effect is to remove the
        sponsor panel. A key activates <strong>one machine</strong> at a time. If you replace that
        machine, or rename it, or reinstall Windows, contact us from the address you purchased with
        and we will reissue at no charge.
      </p>
      <p>
        When the {PRICE.trialDays} ad-free days end without a key, <strong>nothing stops</strong>.
        Every feature keeps working, nothing is deleted, you are not locked out of files you have
        already downloaded, and your history and settings are untouched. The sponsor panel appears,
        and that is the whole of it.
      </p>

      <h2>Advertising in the free version</h2>
      <p>
        Without a key, Flintgrab displays a single sponsor panel inside its own window. It is a
        static image and a line of text, served by us. It contains no third-party code, opens no
        windows, appears nowhere outside the application, and never interrupts or delays a download.
      </p>
      <p>
        We do not sell or share any data about you with advertisers, and we hold none to sell. See
        the <a href="/privacy.html">privacy policy</a> for exactly what is sent and what is not.
      </p>
      <p>
        We choose what appears there. We will not run adverts for system cleaners, driver updaters,
        antivirus software, cryptocurrency, gambling, adult content, or other download managers.
      </p>

      <h2>What you download is your responsibility</h2>
      <p>
        Flintgrab is a general-purpose transfer tool. It does not decide what you are allowed to
        download. You do, and you are responsible for that decision.
      </p>
      <p>
        Downloading copyrighted material without permission may be unlawful where you live, and may
        breach the terms of service of the site you are downloading from. Use Flintgrab for content
        you own, content you have permission to save, content licensed for reuse, or content where
        your local law permits personal copies. Do not use it for anything else.
      </p>
      <p>
        <strong>Flintgrab does not circumvent digital rights management.</strong> It cannot download
        from services that use DRM to protect their content, this is deliberate, and no version will
        add that capability.
      </p>

      <h2>Bundled open-source components</h2>
      <p>
        Flintgrab ships alongside third-party programs that run as separate processes, including
        FFmpeg and yt-dlp. They remain under their own licences, and the full licence texts are
        installed with the application. Nothing in these terms limits the rights those licences give
        you in respect of those components.
      </p>

      <h2>No warranty</h2>
      <p>
        Flintgrab is provided as is, without warranty of any kind, express or implied. It may
        contain defects, it may fail to download a given file, and an update to a website may break
        support for that website without notice.
      </p>
      <p>
        Keep your own copies of anything you cannot afford to lose. Flintgrab writes to your disk.
        Verify that important files are complete and correct.
      </p>

      <h2>Refunds</h2>
      <p>
        The free version exists so that you can find out whether Flintgrab works for you before
        paying anything — it is the same application, not a limited one. If a key you bought does
        not activate, write to us and we will fix it or refund it.
      </p>
      <p>
        A refunded key stops working within about a week, when the application next checks it. The
        application itself keeps running as the free version; nothing is uninstalled and nothing you
        downloaded is affected.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the maximum extent permitted by law, we are not liable for any indirect, incidental,
        special, or consequential damages, nor for lost data, lost profits, or loss of use, arising
        from your use of Flintgrab. Nothing here limits liability that cannot lawfully be limited.
      </p>

      <h2>Changes</h2>
      <p>
        These terms may be updated. Material changes will be dated here. Continuing to use Flintgrab
        after a change means you accept the updated terms. A change to the price never affects a
        licence already bought, and never disables software already installed on your machine.
      </p>

      <h2>Contact</h2>
      <p>
        <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
      </p>
    </DocPage>
  )
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Terms />
  </StrictMode>
)
