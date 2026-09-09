# Endpoint: Gallery Inquiries

## Overview
* **URL**: `/contact`
* **HTTP Method**: `GET`, `POST` (Client inquiry submission)
* **Nuxt Page File**: [`pages/contact.vue`](file:///Users/ifeany/Desktop/projects/side/pages/contact.vue)

---

## Query Parameters (Deep Linking Contract)

The inquiry desk accepts URL query parameters to mount the context banner, pre-select the inquiry category, and populate the message field:

| Parameter | Type | Required | Values / Examples | Description |
| :--- | :--- | :--- | :--- | :--- |
| `type` | `string` | No | `artwork`, `exhibition`, `artist`, `art-fair`, `publication` | Determines context badge and auto-fill template. |
| `id` | `string` | No | `diffusion-state`, `phos-gene`, `dr-elena-voss` | Target record slug identifier. |
| `ref` | `string` | No | `AVA-2024-001`, `Berlin Mitte`, `01` | Catalogue code or exhibition reference. |
| `title` | `string` | No | `Diffusion State`, `Phos Gene`, `Art Basel` | Artwork, exhibition, or fair title. |
| `artist` | `string` | No | `Elena Voss`, `Kaelen Rhys` | Represented artist name. |
| `booth` | `string` | No | `Booth K14, Galleries Sector` | Art fair sector or booth designation. |

---

## Deep Link Contracts & Templates

### 1. Artwork Acquisition Inquiry
```http
GET /contact?type=artwork&id=diffusion-state&ref=AVA-2024-001&title=Diffusion%20State&artist=Elena%20Voss
```
* **Rendered Badge**: `CATALOGUED ARTWORK`
* **Form Classification**: `ARTWORK ACQUISITION & PRICING`
* **Pre-filled Message**:
  ```text
  [INQUIRY REGARDING ARTWORK: AVA-2024-001 Diffusion State by Elena Voss]

  I would like to request pricing, availability, and framing details for this artwork.
  ```

### 2. Exhibition Curatorial Loan Request
```http
GET /contact?type=exhibition&id=phos-gene&ref=01&title=Phos%20Gene
```
* **Rendered Badge**: `EXHIBITION PROGRAM`
* **Form Classification**: `EXHIBITION LOAN & CURATORIAL INQUIRY`
* **Pre-filled Message**:
  ```text
  [INQUIRY REGARDING EXHIBITION: Phos Gene]

  I would like to inquire regarding curatorial notes, institutional loan availability, or private gallery walkthroughs.
  ```

### 3. Artist Inquiry & Commissions
```http
GET /contact?type=artist&id=kaelen-rhys&ref=London%2C%20United%20Kingdom&title=Kaelen%20Rhys&artist=Kaelen%20Rhys
```
* **Rendered Badge**: `REPRESENTED ARTIST`
* **Form Classification**: `ARTIST REPRESENTATION & COMMISSIONS`
* **Pre-filled Message**:
  ```text
  [INQUIRY REGARDING ARTIST: Kaelen Rhys]

  I would like to inquire about available works, upcoming presentations, or studio commissions by Kaelen Rhys.
  ```

### 4. Art Fair VIP Preview Pass
```http
GET /contact?type=art-fair&id=art-basel-2025&title=Art%20Basel&booth=Booth%20K14
```
* **Rendered Badge**: `ART FAIR PRESENTATION`
* **Form Classification**: `ART FAIR VIP PREVIEW PASS`
* **Pre-filled Message**:
  ```text
  [INQUIRY REGARDING ART FAIR: Art Basel (Booth K14)]

  Requesting VIP preview credentials, collector preview hours, and the booth presentation preview catalogue.
  ```
