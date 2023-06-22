---

---

# Hybrid - network configuration

<p id="date-and-time">12 minutes to read - 30 March 2023</p>

## Reference table

The following table lists the reference table for products requiring whitelisting and firewall configuration.

Reference Number | Reference URL
--- | ---
R01 | [https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/configure-proxy-internet](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/configure-proxy-internet)
R02 | [https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/production-deployment](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/production-deployment)
R03 | [https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/configure-splunk](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/configure-splunk)
R04 | [https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/enable-siem-integration](https://docs.microsoft.com/en-us/windows/security/threat-protection/microsoft-defender-atp/enable-siem-integration)
R05 | [https://docs.microsoft.com/en-us/cloud-app-security/network-requirements](https://docs.microsoft.com/en-us/cloud-app-security/network-requirements)
R06 | [https://docs.microsoft.com/en-au/office365/enterprise/urls-and-ip-address-ranges?redirectSourcePath=%252farticle%252fOffice-365-URLs-and-IP-address-ranges-8548a211-3fe7-47cb-abb1-355ea5aa88a2](https://docs.microsoft.com/en-au/office365/enterprise/urls-and-ip-address-ranges?redirectSourcePath=%252farticle%252fOffice-365-URLs-and-IP-address-ranges-8548a211-3fe7-47cb-abb1-355ea5aa88a2)
R07 | [https://docs.microsoft.com/en-au/office365/enterprise/additional-office365-ip-addresses-and-urls](https://docs.microsoft.com/en-au/office365/enterprise/additional-office365-ip-addresses-and-urls)
R08 | [https://docs.microsoft.com/en-us/defender-for-identity/prerequisites#-network-name-resolution-nnr-requirements](https://docs.microsoft.com/en-us/defender-for-identity/prerequisites#-network-name-resolution-nnr-requirements)
R09 | [https://docs.microsoft.com/en-us/azure/active-directory/hybrid/reference-connect-ports](https://docs.microsoft.com/en-us/azure/active-directory/hybrid/reference-connect-ports)

## Microsoft Advanced Threat Protection (ATP)

### Proxy whitelist

The following describes the Microsoft Advanced Threat Protection Proxy Whitelist settings.

Reference | Purpose | Source | Destination | Port
---| --- | --- | --- | --- 
R01, R02 | ATP Common URLs for all locations | All ATP Clients | crl.microsoft.com<br>ctldl.windowsupdate.com<br>events.data.microsoft.com<br>notify.windows.com<br>settings-win.data.microsoft.com | TCP 443
R01, R02 | ATP URLs for US Region | All ATP Clients | us.vortex-win.data.microsoft.com<br>ussus1eastprod.blob.core.windows.net<br>ussus1westprod.blob.core.windows.net<br>ussus2eastprod.blob.core.windows.net<br>ussus2westprod.blob.core.windows.net<br>ussus3eastprod.blob.core.windows.net<br>ussus3westprod.blob.core.windows.net<br>ussus4eastprod.blob.core.windows.net<br>ussus4westprod.blob.core.windows.net<br>us-v20.events.data.microsoft.com<br>winatp-gw-cus.microsoft.com<br>winatp-gw-eus.microsoft.com<br>wsus1eastprod.blob.core.windows.net<br>wsus1westprod.blob.core.windows.net<br>wsus2eastprod.blob.core.windows.net<br>wsus2westprod.blob.core.windows.net | TCP 443
R01, R02 | ATP US machine proxy and Internet connectivity settings | All ATP Clients | automatedirstrprdcus.blob.core.windows.net | 
R03, R04 | ATP Splunk Integration | Splunk Servers | wdatp-alertexporter-us.securitycenter.windows.com<br>graph.windows.net | TCP 443

### Direct firewall exclusion

No firewall exclusions required.

## Microsoft Cloud App Security (MCAS)

### Proxy whitelist

The following table describes the Microsoft Cloud App Security Proxy Whitelist settings.

Reference | Purpose | Source | Destination | Port
---| --- | --- | --- | --- 
R05 | MCAS Portal Access | | *.us3.portal.cloudappsecurity.com<br>portal.cloudappsecurity.com<br>*.portal.cloudappsecurity.com<br>cdn.cloudappsecurity.com<br>adaproddiscovery.azureedge.net<br>*.s-microsoft.com<br>*.msecnd.net<br>dev.virtualearth.net<br>*.cloudappsecurity.com<br>flow.microsoft.com<br>static2.sharepointonline.com<br>dc.services.visualstudio.com<br>*.blob.core.windows.net<br>*.us3.cas.ms<br>*.us3.access-control.cas.ms<br>*.us3.saml.cas.ms | TCP 443
R05 | MCAS SIEM Agent Connection | Splunk Servers | ocsp.digicert.com<br>ocsp.msocsp.com | TCP 80

### Direct firewall exclusion

The following table describes the Microsoft Cloud App Security direct firewall exclusion settings.

Reference | Purpose | Source | Destination | Port
---| --- | --- | --- | --- 
R05 | MCAS Portal Access | | 13.80.125.22<br>40.74.1.235<br>40.74.6.204<br>40.90.218.196<br>40.90.218.198<br>51.143.58.207<br>52.137.89.147<br>52.183.75.62 | TCP 443
R05 | MCAS SIEM Agent Connection | Agency SIEM Servers | 13.80.125.22<br>40.74.1.235<br>40.74.6.204<br>40.90.218.196<br>40.90.218.198<br>51.143.58.207<br>52.137.89.147<br>52.183.75.62 | TCP 443
R05 | MCAS Access and Session Controls | | 40.81.62.224<br>40.81.62.220<br>40.82.186.168<br>40.82.186.169<br>52.155.180.210<br>52.155.179.84<br>40.66.59.196<br>40.66.60.224<br>40.65.170.80<br>40.65.170.83<br>40.81.127.229<br>40.81.121.66<br>104.45.170.191<br>104.45.170.183<br>40.91.114.40<br>40.91.114.42<br>40.81.62.179<br>40.81.62.223<br>20.40.162.86<br>20.40.162.200<br>40.82.186.182<br>40.82.186.177<br>52.139.21.70<br>52.139.16.105<br>52.155.177.13<br>52.155.180.208<br>52.155.164.131<br>52.155.167.231<br>40.66.60.226<br>40.66.59.193<br>40.66.61.193<br>40.66.61.158<br>40.65.170.113<br>40.65.170.82<br>52.139.245.1<br>52.139.245.21<br>40.81.120.192<br>40.81.127.239<br>51.137.136.34<br>51.137.137.69<br>104.45.170.70<br>104.45.170.180<br>52.224.190.225<br>52.224.191.62<br>40.91.114.41<br>40.91.78.105<br>52.148.161.45<br>52.148.161.53<br>40.81.62.193<br>40.81.62.162<br>40.82.186.166<br>40.82.186.176<br>52.155.180.209<br>52.155.178.247<br>40.66.59.246<br>40.66.59.195<br>40.65.170.81<br>40.65.170.112<br>40.81.120.191<br>40.81.123.157<br>104.45.170.186<br>104.45.170.178<br>40.91.114.43<br>40.91.74.37<br>20.40.161.160<br>20.40.161.161<br>52.139.2.0<br>52.139.1.156<br>52.155.180.211<br>52.155.182.138<br>40.66.62.7<br>40.66.62.9<br>20.184.63.158<br>20.184.61.253<br>20.40.106.51<br>20.40.107.84<br>52.224.202.86<br>52.224.202.91<br>51.143.122.59<br>51.143.122.60<br>40.82.186.168<br>40.82.186.169<br>52.139.2.0<br>52.139.1.156<br>40.82.186.182<br>40.82.186.177<br>52.139.21.70<br>52.139.16.105<br>52.139.9.176<br>52.139.9.198 | TCP 443

### Mail server

Table 6 describes the Microsoft Cloud App Security Mail Server settings.

Reference | Purpose | Source | Destination | Port
---| --- | --- | --- | --- 
R05 | Mail Relay SPAM Exception | Agency Mail Relays | 65.55.234.192/26<br>207.46.200.0/27<br>65.55.52.224/27<br>94.245.112.0/27<br>111.221.26.0/27<br>207.46.50.192/26 | N/A

## Office 365 – Common and Office Online

### Proxy whitelist

The following table describes the Office 365 Common and Office Online Proxy Whitelist settings.

Reference | Purpose | Source | Destination | Port
---| --- | --- | --- | --- 
R06 | Microsoft 365 Common and Office Online | | \*.cdn.office.net <br>contentstorage.osi.office.net<br>\*.onenote.com<br>\*cdn.onenote.net<br>ajax.aspnetcdn.com<br>apis.live.net<br>cdn.optimizely.com<br>officeapps.live.com<br>www.onedrive.com<br>apc.delve.office.com<br>aus.delve.office.com<br>can.delve.office.com<br>delve.office.com<br>delve-gcc.office.com<br>eur.delve.office.com<br>gbr.delve.office.com<br>ind.delve.office.com<br>jpn.delve.office.com<br>kor.delve.office.com<br>lam.delve.office.com<br>nam.delve.office.com<br>suite.office.net<br>webshell.suite.office.com<br>\*.aria.microsoft.com<br>\*.events.data.microsoft.com<br>\*.o365weve.com<br>amp.azure.net<br>appsforoffice.microsoft.com<br>assets.onestore.ms<br>auth.gfx.ms<br>az826701.vo.msecnd.net<br>c1.microsoft.com<br>client.hip.live.com<br>contentstorage.osi.office.net<br>dgps.support.microsoft.com<br>docs.microsoft.com<br>msdn.microsoft.com<br>platform.linkedin.com<br>prod.msocdn.com<br>products.office.com<br>r1.res.office365.com<br>r4.res.office365.com<br>res.delve.office.com<br>shellprod.msocdn.com<br>support.content.office.net<br>support.microsoft.com<br>support.office.com<br>technet.microsoft.com<br>templates.office.com<br>videocontent.osi.office.net<br>videoplayercdn.osi.office.net<br>\*.office365.com<br>\*.aadrm.com<br>\*.azurerms.com<br>\*.informationprotection.azure.com<br>ecn.dev.virtualearth.net<br>informationprotection.hosting.portal.azure.net<br>o15.officeredir.microsoft.com<br>ocsredir.officeapps.live.com<br>officepreviewredir.microsoft.com<br>officeredir.microsoft.com<br>r.office.microsoft.com<br>ocws.officeapps.live.com<br>odc.officeapps.live.com<br>roaming.officeapps.live.com<br>activation.sls.microsoft.com<br>crl.microsoft.com<br>ols.officeapps.live.com<br>office15client.microsoft.com<br>officeclient.microsoft.com<br>ocsa.officeapps.live.com<br>insertmedia.bing.office.net<br>go.microsoft.com<br>support.office.com<br>mrodevicemgr.officeapps.live.com<br>ajax.aspnetcdn.com<br>cdn.odc.officeapps.live.com<br>officecdn.microsoft.com<br>officecdn.microsoft.com.edgesuite.net<br>\*.entrust.net<br>\*.geotrust.com<br>\*.omniroot.com<br>\*.public-trust.com<br>\*.symcb.com<br>\*.symcd.com<br>\*.verisign.com<br>\*.verisign.net<br>aia.entrust.net<br>apps.identrust.com<br>cacert.a.omniroot.com<br>cacert.omniroot.com<br>cacerts.digicert.com<br>cdp1.public-trust.com<br>cert.int-x3.letsencrypt.org<br>crl.entrust.net<br>crl.globalsign.com<br>crl.globalsign.net<br>crl.identrust.com<br>crl.microsoft.com<br>crl3.digicert.com<br>crl4.digicert.com<br>evintl-aia.verisign.com<br>evintl-crl.verisign.com<br>evintl-ocsp.verisign.com<br>evsecure-aia.verisign.com<br>evsecure-crl.verisign.com<br>evsecure-ocsp.verisign.com<br>isrg.trustid.ocsp.identrust.com<br>mscrl.microsoft.com<br>ocsp.digicert.com<br>ocsp.entrust.net<br>ocsp.globalsign.com<br>ocsp.int-x3.letsencrypt.org<br>ocsp.msocsp.com<br>ocsp.omniroot.com<br>ocsp2.globalsign.com<br>ocspx.digicert.com<br>s1.symcb.com<br>s2.symcb.com<br>sa.symcb.com<br>sd.symcb.com<br>secure.globalsign.com<br>sr.symcb.com<br>sr.symcd.com<br>su.symcb.com<br>su.symcd.com<br>vassg142.crl.omniroot.com<br>vassg142.ocsp.omniroot.com<br>www.digicert.com<br>www.microsoft.com<br>\*.loki.delve.office.com<br>loki.delve.office.com<br>loki.delve-gcc.office.com<br>lpcres.delve.office.com | TCP 443
R06 | Microsoft 365 Common and Office Online | | ccs.login.microsoftonline.com<br>\*.microsoftonline.com<br>\*.microsoftonline-p.com<br>\*.msauth.net<br>\*.msauthimages.net<br>\*.msecnd.net<br>\*.msftauth.net<br>\*.msftauthimages.net<br>\*.phonefactor.net<br>enterpriseregistration.windows.net<br>management.azure.com<br>policykeyservice.dc.ad.msft.net<br>secure.aadcdn.microsoftonline-p.com<br>o15.officeredir.microsoft.com<br>ocsredir.officeapps.live.com<br>officepreviewredir.microsoft.com<br>officeredir.microsoft.com<br>r.office.microsoft.com<br>ocws.officeapps.live.com<br>odc.officeapps.live.com<br>roaming.officeapps.live.com<br>activation.sls.microsoft.com<br>crl.microsoft.com<br>ols.officeapps.live.com<br>office15client.microsoft.com<br>officeclient.microsoft.com<br>ocsa.officeapps.live.com<br>insertmedia.bing.office.net<br>go.microsoft.com<br>support.office.com<br>ajax.aspnetcdn.com<br>cdn.odc.officeapps.live.com<br>officecdn.microsoft.com<br>officecdn.microsoft.com.edgesuite.net<br>\*.entrust.net<br>\*.geotrust.com<br>\*.omniroot.com<br>\*.public-trust.com<br>\*.symcb.com<br>\*.symcd.com<br>\*.verisign.com<br>\*.verisign.net<br>aia.entrust.net<br>apps.identrust.com<br>cacert.a.omniroot.com<br>cacert.omniroot.com<br>cacerts.digicert.com<br>cdp1.public-trust.com<br>cert.int-x3.letsencrypt.org<br>crl.entrust.net<br>crl.globalsign.com<br>crl.globalsign.net<br>crl.identrust.com<br>crl.microsoft.com<br>crl3.digicert.com<br>crl4.digicert.com<br>evintl-aia.verisign.com<br>evintl-crl.verisign.com<br>evintl-ocsp.verisign.com<br>evsecure-aia.verisign.com<br>evsecure-crl.verisign.com<br>evsecure-ocsp.verisign.com<br>isrg.trustid.ocsp.identrust.com<br>mscrl.microsoft.com<br>ocsp.digicert.com<br>ocsp.entrust.net<br>ocsp.globalsign.com<br>ocsp.int-x3.letsencrypt.org<br>ocsp.msocsp.com<br>ocsp.omniroot.com<br>ocsp2.globalsign.com<br>ocspx.digicert.com<br>s1.symcb.com<br>s2.symcb.com<br>sa.symcb.com<br>sd.symcb.com<br>secure.globalsign.com<br>sr.symcb.com<br>sr.symcd.com<br>su.symcb.com<br>su.symcd.com<br>vassg142.crl.omniroot.com<br>vassg142.ocsp.omniroot.com<br>www.digicert.com<br>www.microsoft.com<br>\*.loki.delve.office.com<br>loki.delve.office.com<br>loki.delve-gcc.office.com<br>lpcres.delve.office.com<br>\*.office.com<br>cdnprod.myanalytics.microsoft.com<br>myanalytics.microsoft.com<br>myanalytics-gcc.microsoft.com<br>workplaceanalytics.cdn.office.net<br>workplaceanalytics.office.com | TCP 80, 443

### Direct firewall exclusion

The following table describes the Office 365 Common and Office Online Direct Firewall Exclusion settings.

Reference | Purpose | Source | Destination | Port
---| --- | --- | --- | --- 
R06 | Microsoft 365 Common and Office Online | | 20.190.128.0/18<br>40.126.0.0/18<br>13.80.125.22/32<br>13.91.91.243/32<br>13.107.6.156/31<br>13.107.7.190/31<br>13.107.9.156/31<br>40.81.156.154/32<br>40.90.218.198/32<br>52.108.0.0/14<br>52.174.56.180/32<br>52.183.75.62/32<br>52.184.165.82/32<br>104.42.230.91/32<br>157.55.145.0/25<br>157.55.155.0/25<br>157.55.227.192/26<br>13.80.125.22/32<br>13.91.91.243/32<br>13.107.6.156/31<br>13.107.7.190/31<br>13.107.9.156/31<br>40.81.156.154/32<br>40.90.218.198/32<br>52.108.0.0/14<br>52.174.56.180/32<br>52.183.75.62/32<br>52.184.165.82/32<br>104.42.230.91/32<br>157.55.145.0/25<br>157.55.155.0/25<br>157.55.227.192/26 | TCP 80, 443
R06 | Microsoft 365 Common and Office Online | | 13.107.6.171/32<br>13.107.140.6/32<br>52.108.0.0/14<br>52.238.106.116/32<br>52.244.37.168/32<br>52.244.203.72/32<br>52.244.207.172/32<br>52.244.223.198/32<br>52.247.150.191/32<br>20.190.128.0/18<br>40.126.0.0/18<br>13.80.125.22/32<br>13.91.91.243/32<br>13.107.6.156/31<br>13.107.7.190/31<br>13.107.9.156/31<br>40.81.156.154/32<br>40.90.218.198/32<br>52.108.0.0/14<br>52.174.56.180/32<br>52.183.75.62/32<br>52.184.165.82/32<br>104.42.230.91/32<br>157.55.145.0/25<br>157.55.155.0/25<br>157.55.227.192/26<br>13.80.125.22/32<br>13.91.91.243/32<br>13.107.6.156/31<br>13.107.7.190/31<br>13.107.9.156/31<br>40.81.156.154/32<br>40.90.218.198/32<br>52.108.0.0/14<br>52.174.56.180/32<br>52.183.75.62/32<br>52.184.165.82/32<br>104.42.230.91/32<br>157.55.145.0/25<br>157.55.155.0/25<br>157.55.227.192/26<br>13.107.6.171/32<br>13.107.140.6/32<br>52.108.0.0/14<br>52.238.106.116/32<br>52.244.37.168/32<br>52.244.203.72/32<br>52.244.207.172/32<br>52.244.223.198/32<br>52.247.150.191/32 | TCP 443

## Office 365 – Exchange Online

### Proxy whitelist

The following table describes the Office 365 Exchange Online Proxy Whitelist settings.

Reference | Purpose | Source | Destination | Port
---| --- | --- | --- | --- 
R07 | Exchange Online | Exchange Servers | *.store.core.windows.net<br>asl.configure.office.com<br>mshrcstorageprod.blob.core.windows.net<br>tds.configure.office.com<br>mshybridservice.trafficmanager.net<br>domains.live.com | TCP 443
 | Exchange Online | Exchange Servers | r1.res.office365.com<br>r3.res.office365.com<br>r4.res.office365.com<br>*.outlook.com<br>*.outlook.office.com<br>attachments.office.net | TCP 80, 443

### Direct firewall exclusion

The following table describes the Office 365 Exchange Online Direct Firewall Exclusion settings.

Reference | Purpose | Source | Destination | Port
---| --- | --- | --- | --- 
R06 | Exchange Online | Exchange Servers | 13.107.6.152/31<br>13.107.18.10/31<br>13.107.128.0/22<br>23.103.160.0/20<br>40.96.0.0/13<br>40.104.0.0/15<br>52.96.0.0/14<br>131.253.33.215/32<br>132.245.0.0/16<br>150.171.32.0/22<br>191.234.140.0/22<br>204.79.197.215/32 | TCP 587
R06 | Exchange Online | Exchange Servers | 40.92.0.0/15<br>40.107.0.0/16<br>52.100.0.0/14<br>52.238.78.88/32<br>104.47.0.0/17 | TCP 443
R06 | Exchange Online | Exchange Servers | 40.92.0.0/15<br>40.107.0.0/16<br>52.100.0.0/14<br>104.47.0.0/17 | TCP 25
R06 | Exchange Online | Exchange Servers | 13.107.6.152/31<br>13.107.18.10/31<br>13.107.128.0/22<br>23.103.160.0/20<br>40.96.0.0/13<br>40.104.0.0/15<br>52.96.0.0/14<br>131.253.33.215/32<br>132.245.0.0/16<br>150.171.32.0/22<br>191.234.140.0/22<br>204.79.197.215/32 | TCP 80, 443

## Office 365 – Skype for Business and Microsoft Teams

### Proxy whitelist

The following table describes the Office 365 Skype for Business and Microsoft Teams Proxy Whitelist settings.

Reference| Purpose | Source | Destination | Port
---| --- | --- | --- | --- 
R06 | Skype for Business Online and Microsoft Teams | | *.sfbassets.com<br>*.urlp.sfbassets.com<br>skypemaprdsitus.trafficmanager.net<br>*.keydelivery.mediaservices.windows.net<br>*.msecnd.net<br>*.streaming.mediaservices.windows.net<br>ajax.aspnetcdn.com<br>mlccdn.blob.core.windows.net<br>aka.ms<br>amp.azure.net<br>*.msedge.net<br>compass-ssl.microsoft.com<br>*.mstea.ms<br>*.secure.skypeassets.com<br>mlccdnprod.azureedge.net<br>videoplayercdn.osi.office.net<br>*.skype.com | TCP 80, 443
R06 | Skype for Business Online and Microsoft Teams | | quicktips.skypeforbusiness.com<br>*.sfbassets.com<br>*.urlp.sfbassets.com<br>skypemaprdsitus.trafficmanager.net<br>*.keydelivery.mediaservices.windows.net<br>*.msecnd.net<br>*.streaming.mediaservices.windows.net<br>ajax.aspnetcdn.com<br>mlccdn.blob.core.windows.net<br>aka.ms<br>amp.azure.net<br>*.msedge.net<br>compass-ssl.microsoft.com<br>*.mstea.ms<br>*.secure.skypeassets.com<br>mlccdnprod.azureedge.net<br>videoplayercdn.osi.office.net<br>*.skype.com<br>statics.teams.microsoft.com | TCP 443

### Direct firewall exclusion

The following table describes the Office 365 Skype for Business and Teams Direct Firewall Exclusion settings.

Reference | Purpose | Source | Destination | Port
---| --- | --- | --- | --- 
R06 | Skype for Business Online and Microsoft Teams | | 13.70.151.216/32<br>13.71.127.197/32<br>13.72.245.115/32<br>13.73.1.120/32<br>13.75.126.169/32<br>13.89.240.113/32<br>13.107.3.0/24<br>13.107.64.0/18<br>51.140.155.234/32<br>51.140.203.190/32<br>51.141.51.76/32<br>52.112.0.0/14<br>52.120.0.0/14<br>52.163.126.215/32<br>52.170.21.67/32<br>52.172.185.18/32<br>52.178.94.2/32<br>52.178.161.139/32<br>52.228.25.96/32<br>52.238.119.141/32<br>52.242.23.189/32<br>52.244.160.207/32<br>104.215.11.144/32<br>104.215.62.195/32<br>138.91.237.237/32 | TCP 80, 443
R06 | Skype for Business Online and Microsoft Teams | | 13.70.151.216/32<br>13.71.127.197/32<br>13.72.245.115/32<br>13.73.1.120/32<br>13.75.126.169/32<br>13.89.240.113/32<br>13.107.3.0/24<br>13.107.64.0/18<br>51.140.155.234/32<br>51.140.203.190/32<br>51.141.51.76/32<br>52.112.0.0/14<br>52.120.0.0/14<br>52.163.126.215/32<br>52.170.21.67/32<br>52.172.185.18/32<br>52.178.94.2/32<br>52.178.161.139/32<br>52.228.25.96/32<br>52.238.119.141/32<br>52.242.23.189/32<br>52.244.160.207/32<br>104.215.11.144/32<br>104.215.62.195/32<br>138.91.237.237/32 | TCP 443
R06 | Skype for Business Online and Microsoft Teams | | 13.107.64.0/18<br>52.112.0.0/14<br>52.120.0.0/14 | UDP 3478, 3479, 3480, 3481

## Office 365 – SharePoint Online and OneDrive for Business

### Proxy whitelist

The following table describes the Office 365 SharePoint Online and OneDrive for Business Proxy Whitelist settings.

Reference | Purpose | Source | Destination | Port
---| --- | --- | --- | --- 
R06 | SharePoint Online and OneDrive for Business | | *.wns.windows.com<br>admin.onedrive.com<br>officeclient.microsoft.com<br>g.live.com<br>oneclient.sfx.ms<br>*.sharepointonline.com<br>cdn.sharepointonline.com<br>privatecdn.sharepointonline.com<br>publiccdn.sharepointonline.com<br>spoprod-a.akamaihd.net<br>static.sharepointonline.com<br>*.svc.ms<br><Agency Name>Dev-files.sharepoint.com<br><Agency Name>Dev-myfiles.sharepoint.com | TCP 80, 443

### Direct firewall exclusion

The following table describes the Office 365 SharePoint Online and OneDrive for Business Direct Firewall Exclusion settings.

Reference | Purpose | Source | Destination | Port
---| --- | --- | --- | --- 
R06 | SharePoint Online and OneDrive for Business | | 13.107.136.0/22<br>40.108.128.0/17<br>52.104.0.0/14<br>104.146.128.0/17<br>150.171.40.0/22 | TCP 80, 443

## Office 365 – email protective markings with MIP technology

For organisations that send PROTECTED emails through a GovLink mail gateway, the labelling product, as well as the gateway itself, must support the inspection of the email headers. At the time of writing, Microsoft Information Protection labelling does not natively offer a method to format email headers in a manner consistent with the requirements of the PSPF and as such, additional configuration is needed. This section provides a method of modifying the email headers in a mail gateway to ensure compliance with the PSPF.

### Outbound protective marking

Below describes the Office 365 Cisco ESA Rules for Office 365 Outbound Protective Marking settings.

```
office365_outboundprotectivemarkings:
if ((mail-from == '@<Agency Acronym>\\.gov\\.au$') and (sendergroup == "RELAYLIST")) {
    if header("Subject") == "SEC=PROTECTED" {
        edit-header-text("Subject", "\\[SEC=PROTECTED\\]*", "");
    }
    if header("Subject") == "SEC=OFFICIAL:Sensitive" {
        edit-header-text("Subject", "\\[SEC=OFFICIAL:Sensitive\\]*", "");
    }
    if header("Subject") == "SEC=UNOFFICIAL" {
        edit-header-text("Subject", "\\[SEC=UNOFFICIAL\\]*", "");
    }
    if header("Subject") == "SEC=OFFICIAL" {
        edit-header-text("Subject", "\\[SEC=OFFICIAL\\]*", "");
    }
    if (header("msip_labels") == "PROTECTED") AND (sendergroup == "RELAYLIST") {
        insert-header("X-Protective-marking", "VER=2018.1, NS=gov.au, SEC=PROTECTED, ORIGIN=$EnvelopeFrom");
        edit-header-text("Subject", "(.*)", "\\1 [SEC=PROTECTED]");
    } else {
        if (header("msip_labels") == "Sensitive") AND (sendergroup == "RELAYLIST") {
            insert-header("X-Protective-marking", "VER=2018.1, NS=gov.au, SEC=OFFICIAL:Sensitive, ORIGIN=$EnvelopeFrom");
            edit-header-text("Subject", "(.*)", "\\1 [SEC=OFFICIAL:Sensitive]");
        } else {
            if (header("msip_labels") == "UNOFFICIAL") AND (sendergroup == "RELAYLIST") {
                insert-header("X-Protective-marking", "VER=2018.1, NS=gov.au, SEC=UNOFFICIAL, ORIGIN=$EnvelopeFrom");
                edit-header-text("Subject", "(.*)", "\\1 [SEC=UNOFFICIAL]");
            } else {
                if (header("msip_labels") == "OFFICIAL") AND (sendergroup == "RELAYLIST") {
                    insert-header("X-Protective-marking", "VER=2018.1, NS=gov.au, SEC=OFFICIAL, ORIGIN=$EnvelopeFrom");
                    edit-header-text("Subject", "(.*)", "\\1 [SEC=OFFICIAL]");
                } else {
                    quarantine("Policy");
                }
            }
        }
    }
} else {                                       
    no-op();
}
```

### Inbound protective marking

Note: Please do not copy the below rule directly into the Agency environment for Inbound Protective Marking as it will not produce the desired results. This is an example rule which requires modification prior to implementation. The rule contains Globally Unique Identifiers (GUIDs) related to instances of sensitivity labels in a specific tenant.

```
office365_inboundprotectivemarkings: 
if (rcpt-to == '@<Agency Acronym>\\.gov\\.au$') {
	if (header("Subject") == "SEC=PROTECTED") AND (header("Subject") == "SEC") {
		insert-header("X-Protective-marking", "VER=2018.1, NS=gov.au, SEC=PROTECTED, ORIGIN=$EnvelopeFrom");
		insert-header("msip_labels", "MSIP_Label_12dcf2ca-f80e-4ac2-861b-4b6557faeea3_Enabled=True;MSIP_Label_12dcf2ca-f80e-4ac2-861b-4b6557faeea3_SiteId=158b7f91-36cd-420e-8730-3dbec75e20a9;MSIP_Label_12dcf2ca-f80e-4ac2-861b-4b6557faeea3_Name=PROTECTED;MSIP_Label_12dcf2ca-f80e-4ac2-861b-4b6557faeea3_ContentBits=0;MSIP_Label_12dcf2ca-f80e-4ac2-861b-4b6557faeea3_Method=Privileged;");
	} else {
		if (header("Subject") == "SEC=OFFICIAL:Sensitive") AND (header("Subject") == "SEC") {
			insert-header("X-Protective-marking", "VER=2018.1, NS=gov.au,SEC=OFFICIAL:Sensitive, ORIGIN=$EnvelopeFrom");
			insert-header("msip_labels", "MSIP_Label_42227f60-6734-42bf-b4e6-da15ab730981_Enabled=True;MSIP_Label_42227f60-6734-42bf-b4e6-da15ab730981_SiteId=158b7f91-36cd-420e-8730-3dbec75e20a9;MSIP_Label_42227f60-6734-42bf-b4e6-da15ab730981_Name=OFFICIAL Sensitive;MSIP_Label_42227f60-6734-42bf-b4e6-da15ab730981_ContentBits=0;MSIP_Label_42227f60-6734-42bf-b4e6-da15ab730981_Method=Privileged;");
		} else {
			if (header("Subject") == "SEC=UNOFFICIAL") AND (header("Subject") == "SEC") {
				insert-header("X-Protective-marking", "VER=2018.1, NS=gov.au, SEC=UNOFFICIAL,ORIGIN=$EnvelopeFrom");
				insert-header("msip_labels", "MSIP_Label_217258b3-6022-44f0-adb4-d6eca052ad20_Enabled=True;MSIP_Label_217258b3-6022-44f0-adb4-d6eca052ad20_SiteId=158b7f91-36cd-420e-8730-3dbec75e20a9;MSIP_Label_217258b3-6022-44f0-adb4-d6eca052ad20_Name=UNOFFICIAL;MSIP_Label_217258b3-6022-44f0-adb4-d6eca052ad20_ContentBits=0;MSIP_Label_217258b3-6022-44f0-adb4-d6eca052ad20_Method=Privileged;");
			} else {
				if (header("Subject") == "SEC=OFFICIAL") AND (header("Subject") == "SEC") {
					insert-header("X-Protective-marking", "VER=2018.1, NS=gov.au, SEC=OFFICIAL,ORIGIN=$EnvelopeFrom");
					insert-header("msip_labels", "MSIP_Label_8260affa-0595-45d6-a83e-a3b79a9c02c4_Enabled=True;MSIP_Label_8260affa-0595-45d6-a83e-a3b79a9c02c4_SiteId=158b7f91-36cd-420e-8730-3dbec75e20a9;MSIP_Label_8260affa-0595-45d6-a83e-a3b79a9c02c4_Name=OFFICIAL;MSIP_Label_8260affa-0595-45d6-a83e-a3b79a9c02c4_ContentBits=0;MSIP_Label_8260affa-0595-45d6-a83e-a3b79a9c02c4_Method=Privileged;");
				} else {
					no-op();
				}
			}
		}
	}
} else  {
	no-op();
}
```

## Azure Advanced Threat Protection (Azure ATP)

The following tables below describe the Azure Advanced Threat Protection service URLs Whitelist settings.

Direct and correct service location access to the agency Azure ATP instance name (Option 1)

Reference | Purpose | Source | Destination | Port
---| --- | --- | --- | --- 
R08 | Azure ATP portal |  | `agency-instance-name`.atp.azure.com | TCP 443
R08 | Azure ATP senor |  | `agency-instance-name`.sensorapi.atp.azure.com | TCP 443

Granular control to service location access for Azure ATP (Option 2)

Reference | Purpose | Source | Destination | Port
---| --- | --- | --- | --- 
R08 | Service location: US |  | triprd1wcusw1sensorapi.atp.azure.com<br>triprd1wcuswb1sensorapi.atp.azure.com<br>triprd1wcuse1sensorapi.atp.azure.com | TCP 443
R08 | Service location: Europe |  | triprd1wceun1sensorapi.atp.azure.com<br>triprd1wceuw1sensorapi.atp.azure.com | TCP 443
R08 | Service location: Asia |  | triprd1wcasse1sensorapi.atp.azure.com | TCP 443

Azure Advanced Threat Protection Sensor (Domain Controller) Proxy Whitelist settings

Reference | Purpose | Source | Destination | Port
---| --- | --- | --- | --- 
R08 | Internet ports | Domain Controllers | SSL (*.atp.azure.com) | TCP 443 / Outbound direction
R08 | Internet ports | Localhost | SSL (localhost) | TCP 444 / Both direction
R08 | Internal ports | Domain Controllers | All devices on network | TCP/UDP 445 / Outbound
R08 | Internal ports (Optional) | Domain Controllers | SIEM Server | TCP/UDP 514, depending on configuration / Inbound
R08 | Internal ports | Domain Controllers | RADIUS | UDP 1813 / Inbound direction
R08 | Internal ports | Domain Controllers | DNS servers | TCP & UDP 53 / outbound direction
R08 | Internal ports | Domain Controllers | All devices on network | TCP 135 / Inbound direction
R08 | Internal ports | Domain Controllers | All devices on network | UDP 137 / Inbound direction
R08 | Internal ports | Domain Controllers | All devices on network | TCP 3389 / Inbound direction

Azure Advanced Threat Protection Sensor (Standalone Server) Proxy Whitelist settings

Reference | Purpose | Source | Destination | Port
---| --- | --- | --- | --- 
R08 | Internet ports | Standalone Server | SSL (*.atp.azure.com) | TCP 443 / Outbound direction
R08 | Internal ports | Standalone Server | Domain Controllers | TCP & UDP 389 / Outbound direction
R08 | Internal ports | Standalone Server | Domain Controllers | TCP 636 / Outbound direction
R08 | Internal ports | Standalone Server | Domain Controllers | TCP 3268 / Outbound direction
R08 | Internal ports | Standalone Server | Domain Controllers | TCP 3269 / Outbound direction
R08 | Internal ports | Standalone Server | Domain Controllers | TCP & UDP 88 / Outbound direction
R08 | Internal ports | Standalone Server | All devices on network | TCP/UDP 445 / Outbound
R08 | Internal ports | Standalone Server | Domain Controllers | UDP 123 / Outbound direction
R08 | Internal ports | Standalone Server | DNS servers | TCP & UDP 53 / Outbound direction
R08 | Internal ports (Optional) | Standalone Server | SIEM Server | TCP/UDP 514, depending on configuration / Inbound direction
R08 | Internal ports | Domain Controllers | RADIUS | UDP 1813 / Inbound direction

## Azure Active Directory Connect

The following table describes the AAD Connect ports and protocols required for communication between the AAD Connect server and on-premises Active Directory.

Reference | Purpose | Source | Destination | Port
---| --- | --- | --- | --- 
R09 | DNS (DNS lookups on the destination forest) | AAD Connect server | DNS server | 53 (TCP/UDP) / Both direction
R09 | Kerberos (Authentication to the AD forest) | AAD Connect server | Domain Controllers | 88 (TCP/UDP) / Both direction
R09 | MS-RPC (Used during the initial configuration of the Azure AD Connect wizard when it binds to the AD forest, and also during password synchronisation) | AAD Connect server | Domain Controllers | 135 (TCP/UDP) / Both direction
R09 | LDAP (Used for data import from AD. Data is encrypted with Kerberos Sign & Seal) | AAD Connect server | Domain Controllers | 389 (TCP/UDP) / Both direction
R09 | SMB (used by Seamless SSO to create computer account in AD forest) | AAD Connect server | Domain Controllers | 445 (TCP/UDP) / Both direction
R08 | LDAP/SSL (used for data import from AD. The data transfer is signed and encrypted. Only used if you are using TLS) | AAD Connect server | Domain Controllers | 636 (TCP/UDP)
R08 | RPC (Used during the initial configuration of the Azure AD Connect wizard when it binds to the AD forest, and also during password synchronisation) | AAD Connect server | Domain Controllers | 49152 – 65535 (Random high RPC port) (TCP)

The following table describes the AAD Connect ports and protocols required for communication between the AAD Connect server and Azure AD.

Reference | Purpose | Source | Destination | Port
---| --- | --- | --- | --- 
R09 | HTTP (used to download Certificate Revocation Lists to verify SSL certificates) | AAD Connect server | Agency Azure AD Tenant | 80 (TCP) / outbound direction
R09 | HTTPS (used to synchronise with Azure AD, including communication with the AAD Connect Health agents) | AAD Connect server | Agency Azure AD Tenant | 443 (TCP) / outbound direction
