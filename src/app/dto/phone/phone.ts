export class Phone {

  id: number;
  brand: string;
  model: string;
  networks: string;
  bands2: string;
  bands3: string;
  bands4: string;
  networkSpeed: string;
  gprs: string;
  edge: string;
  announcedDate: string;
  status: string;
  dimensions: string;
  weight: string;
  sim: string;
  displayType: string;
  displayResolution: string;
  displaySize: string;
  os: string;
  cpu: string;
  chipset: string;
  gpu: string;
  memoryCard: string;
  internalMemory: string;
  ram: string;
  primaryCamera: string;
  secondaryCamera: string;
  loudSpeaker: string;
  audioJack: string;
  wlan: string;
  bluetooth: string;
  gps: string;
  nfc: string;
  radio: string;
  usb: string;
  sensors: string;
  battery: string;
  colors: string;
  price: string;
  imageUrl: string;

  constructor(id: number,
              brand: string,
              model: string,
              networks: string,
              bands2: string,
              bands3: string,
              bands4: string,
              networkSpeed: string,
              gprs: string,
              EDGE: string,
              announcedDate: string,
              status: string,
              dimensions: string,
              weight: string,
              SIM: string,
              displayType: string,
              displayResolution: string,
              displaySize: string,
              OS: string,
              CPU: string,
              chipset: string,
              GPU: string,
              memoryCard: string,
              internalMemory: string,
              RAM: string,
              primaryCamera: string,
              secondaryCamera: string,
              loudSpeaker: string,
              audioJack: string,
              WLAN: string,
              bluetooth: string,
              GPS: string,
              NFC: string,
              radio: string,
              USB: string,
              sensors: string,
              battery: string,
              colors: string,
              price: string,
              imageUrl: string) {
    return new Phone(
      id,
      brand,
      model,
      networks,
      bands2,
      bands3,
      bands4,
      networkSpeed,
      gprs,
      EDGE,
      announcedDate,
      status,
      dimensions,
      weight,
      SIM,
      displayType,
      displayResolution,
      displaySize,
      OS,
      CPU,
      chipset,
      GPU,
      memoryCard,
      internalMemory,
      RAM,
      primaryCamera,
      secondaryCamera,
      loudSpeaker,
      audioJack,
      WLAN,
      bluetooth,
      GPS,
      NFC,
      radio,
      USB,
      sensors,
      battery,
      colors,
      price,
      imageUrl);
  }

}
