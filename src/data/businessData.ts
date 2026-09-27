export interface ServiceItem {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  commonSymptoms: string[];
  diagnosticMethod: string;
}

export interface WarningLight {
  id: string;
  name: string;
  color: 'amber' | 'red' | 'yellow';
  severity: 'Immediate Stop' | 'Prompt Inspection' | 'Caution / Service';
  shortDesc: string;
  commonCauses: string[];
  safeToDrive: string;
  recommendedAction: string;
  svgPath: string;
}

export interface Testimonial {
  id: string;
  author: string;
  location: string;
  vehicle: string;
  issue: string;
  quote: string;
  rating: number;
  date: string;
}

export const BUSINESS_INFO = {
  name: 'Mansfield Auto Electrics',
  tagline: 'Auto Electrical Specialists in Mansfield',
  subtitle: 'Professional vehicle diagnostics, fault finding and auto electrical repairs for cars and light commercial vehicles.',
  phone: '01623 000000',
  phoneDisplay: '01623 000000',
  phoneTel: 'tel:01623000000',
  email: 'info@mansfieldautoelectrics.co.uk',
  emailMailto: 'mailto:info@mansfieldautoelectrics.co.uk',
  address: 'Mansfield, Nottinghamshire',
  postcode: 'NG18 area',
  openingHours: [
    { days: 'Monday – Friday', hours: '08:00 – 17:30' },
    { days: 'Saturday', hours: '08:30 – 13:00' },
    { days: 'Sunday', hours: 'Closed' },
  ],
  serviceAreas: [
    'Mansfield',
    'Mansfield Woodhouse',
    'Forest Town',
    'Sutton-in-Ashfield',
    'Kirkby-in-Ashfield',
    'Rainworth',
    'Blidworth',
    'Pleasley',
    'Warsop',
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'diagnostics',
    title: 'Vehicle Diagnostics',
    shortDesc: 'Computer diagnostics and fault-code scanning to identify problems quickly and accurately.',
    fullDesc: 'We connect dealership-grade diagnostic equipment directly to your vehicle OBD-II and CAN-bus networks to retrieve live diagnostic trouble codes (DTCs), freeze-frame data, and live sensor telemetry. Unlike generic code readers that only wipe codes, we pinpoint the root cause.',
    iconName: 'Cpu',
    commonSymptoms: ['Engine light glowing', 'Vehicle in limp mode', 'Intermittent performance drop', 'Misfires or rough idle'],
    diagnosticMethod: 'Live data logging, bidirectional component activation, oscilloscope waveform test',
  },
  {
    id: 'fault-finding',
    title: 'Electrical Fault Finding',
    shortDesc: 'Diagnosis of wiring faults, electrical problems, blown fuses, shorts and intermittent electrical issues.',
    fullDesc: 'Tracing complex, intermittent electrical gremlins is our specialty. We isolate open circuits, high-resistance connections, earth faults, parasitic battery drains, and harness chafing using micro-current clamps and circuit simulators.',
    iconName: 'Zap',
    commonSymptoms: ['Fuses blowing repeatedly', 'Battery draining overnight', 'Windows or central locking failing', 'Burning smell or melted harness'],
    diagnosticMethod: 'Parasitic draw testing, voltage drop testing across ground returns, thermal imaging',
  },
  {
    id: 'warning-lights',
    title: 'Dashboard Warning Lights',
    shortDesc: 'Diagnosis of engine management, ABS, airbag, traction control and other dashboard warning lights.',
    fullDesc: 'Dashboard lights are warning signs triggered by onboard computers when sensor data deviates from factory safety limits. We translate what your dashboard is signalling and provide plain-English repair paths before minor issues become major component failures.',
    iconName: 'AlertTriangle',
    commonSymptoms: ['Amber engine warning', 'Flashing warning symbols', 'Brake or ABS light on', 'Service required alert'],
    diagnosticMethod: 'Full module topology scan, live sensor parameter verification, clear & road-test confirmation',
  },
  {
    id: 'battery-charging',
    title: 'Battery & Charging Systems',
    shortDesc: 'Testing and diagnosis of batteries, alternators, starter motors and vehicle charging systems.',
    fullDesc: 'Modern stop-start and AGM/EFB battery systems require precise charging regulation and battery management system (BMS) coding. We test alternator ripple current, diode packs, voltage regulator stability, and battery internal cell conductance.',
    iconName: 'BatteryCharging',
    commonSymptoms: ['Slow engine cranking', 'Battery warning light on dash', 'Stop-start inactive', 'Headlights dimming at idle'],
    diagnosticMethod: 'Digital conductance testing, dynamic alternator output load test, BMS adaptation coding',
  },
  {
    id: 'abs-airbag',
    title: 'ABS & Airbag Diagnostics',
    shortDesc: 'Diagnosis of ABS, SRS and airbag system faults and warning lights.',
    fullDesc: 'Safety restraint systems and anti-lock brakes require zero margin for error. We diagnose wheel speed sensors, reluctor rings, ABS hydraulic pumps, steering angle sensors, airbag squib resistance, clockspring circuits, and seat occupancy sensors.',
    iconName: 'ShieldCheck',
    commonSymptoms: ['ABS warning illuminated', 'Airbag / SRS light staying on', 'Traction control cutting in erratically', 'Speedometer dropping out'],
    diagnosticMethod: 'Wheel speed sensor oscilloscope signal check, SRS circuit resistance loop verification',
  },
  {
    id: 'starter-alternator',
    title: 'Starter & Alternator Problems',
    shortDesc: 'Testing and diagnosis of starting and charging faults.',
    fullDesc: 'Is your starter clicking without turning, or is the alternator failing to keep up with the vehicle electrical load? We inspect starter solenoid feeds, ignition switch wiring, alternator overrun pulleys, smart alternator LIN/CAN control lines, and starter draw.',
    iconName: 'Gauge',
    commonSymptoms: ['Single click when turning key / pressing start', 'Intermittent starting failure', 'Whining noise from alternator pulley', 'Battery discharging while driving'],
    diagnosticMethod: 'Starter current draw test, starter control relay bypass test, LIN-bus alternator interrogation',
  },
  {
    id: 'lighting-accessories',
    title: 'Lighting & Electrical Accessories',
    shortDesc: 'Help with vehicle lighting, switches, sensors and other electrical components.',
    fullDesc: 'From LED and Xenon headlight control units to daytime running lights, wipers, electric power steering (EPS), wiper motors, parking sensors, and reversing cameras, we service OEM lighting and factory electronic accessories.',
    iconName: 'Sliders',
    commonSymptoms: ['One headlight not working despite bulb replacement', 'Indicator hyper-flashing', 'Wipers stopping mid-screen', 'Reverse sensors beeping continuously'],
    diagnosticMethod: 'Body Control Module (BCM) diagnostic testing, switch resistance testing, relay verification',
  },
  {
    id: 'sensor-ecu',
    title: 'Sensor & ECU Diagnostics',
    shortDesc: 'Identification of faults involving vehicle sensors, control modules and engine management systems.',
    fullDesc: 'Modern vehicles have over 30 interconnected electronic control modules. We test MAF/MAP sensors, oxygen/lambda sensors, crankshaft and camshaft position sensors, throttle bodies, and can diagnose ECU communication issues across CAN, LIN, and FlexRay networks.',
    iconName: 'Activity',
    commonSymptoms: ['Engine cuts out unexpectedly', 'Jerky acceleration / hesitation', 'Black or grey exhaust smoke', 'No communication with scan tool'],
    diagnosticMethod: 'PicoScope dual-channel scope capture, 5V sensor reference check, CAN-bus network termination resistance check',
  },
];

export const WARNING_LIGHTS: WarningLight[] = [
  {
    id: 'check-engine',
    name: 'Check Engine',
    color: 'amber',
    severity: 'Prompt Inspection',
    shortDesc: 'Indicates an issue detected by the Engine Control Unit (ECU) impacting emissions, combustion, or engine sensors.',
    commonCauses: ['Faulty O2 / Lambda sensor', 'Mass Airflow (MAF) sensor fault', 'EGR valve blockage', 'Ignition coil or injector misfire', 'Evaporative emissions leak'],
    safeToDrive: 'If solid: Yes, drive moderately to a diagnostic specialist. If flashing: Pull over immediately, unburnt fuel can destroy catalytic converter.',
    recommendedAction: 'Book full diagnostic scan and live sensor parameter evaluation.',
    svgPath: 'M4 10h2V7h3v3h6V7h3v3h2v2h2v4h-2v2h-2v2H9v-2H7v-2H4v-4H2v-2h2v-2zm4 4h8v-2H8v2z',
  },
  {
    id: 'abs',
    name: 'ABS Warning',
    color: 'amber',
    severity: 'Prompt Inspection',
    shortDesc: 'The Anti-lock Braking System has detected a fault and has been disabled. Standard hydraulic brakes remain functional.',
    commonCauses: ['Faulty wheel speed sensor', 'Corroded or cracked reluctor ring', 'ABS pump control module fault', 'Damaged wheel sensor wiring harness'],
    safeToDrive: 'Normal braking usually works, but wheels may lock up under emergency heavy braking. Avoid wet or emergency stops until inspected.',
    recommendedAction: 'Oscilloscope check of all 4 wheel speed sensors and ABS module codes.',
    svgPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z',
  },
  {
    id: 'airbag',
    name: 'Airbag / SRS',
    color: 'red',
    severity: 'Prompt Inspection',
    shortDesc: 'Supplemental Restraint System malfunction. Airbags and seatbelt pretensioners may not deploy during a collision.',
    commonCauses: ['Steering wheel clockspring wear', 'Loose under-seat wiring connector', 'Faulty seatbelt pretensioner', 'Seat occupancy sensor mat failure'],
    safeToDrive: 'Car runs normally, but critical safety equipment is disabled. Vehicle will also fail an MOT inspection with this light illuminated.',
    recommendedAction: 'SRS circuit resistance test and clockspring continuity diagnostics.',
    svgPath: 'M12 4a3 3 0 100 6 3 3 0 000-6zm-7 14c0-3.87 3.13-7 7-7s7 3.13 7 7H5zm14-5a4 4 0 100-8 4 4 0 000 8z',
  },
  {
    id: 'battery',
    name: 'Battery / Charging',
    color: 'red',
    severity: 'Immediate Stop',
    shortDesc: 'The charging system is not charging the 12V battery while the engine runs. The vehicle is running solely on battery reserve.',
    commonCauses: ['Alternator alternator regulator failure', 'Broken or slipping auxiliary drive belt', 'Corroded battery terminal / bad earth strap', 'Smart alternator LIN-bus fault'],
    safeToDrive: 'No. The vehicle engine, electric steering, and safety systems will shut down completely within 10 to 30 minutes once battery voltage drops.',
    recommendedAction: 'Immediate alternator output load test and charging circuit check.',
    svgPath: 'M16 4h-2V2h-4v2H8v3H4v13h16V7h-4V4zM8 14H6v-2h2v2zm10 0h-4v-2h4v2z',
  },
  {
    id: 'brake',
    name: 'Brake Warning',
    color: 'red',
    severity: 'Immediate Stop',
    shortDesc: 'Handbrake is engaged, brake fluid level is critically low, or hydraulic brake pressure has failed.',
    commonCauses: ['Handbrake switch sensor stuck', 'Low brake fluid in reservoir', 'Severe brake pad wear', 'Hydraulic line leak or ABS valve failure'],
    safeToDrive: 'If handbrake is fully released and light stays illuminated, DO NOT DRIVE. Braking capacity may fail completely.',
    recommendedAction: 'Inspect brake fluid level, pad wear sensors, and hydraulic circuit integrity.',
    svgPath: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z',
  },
  {
    id: 'traction',
    name: 'Traction Control',
    color: 'amber',
    severity: 'Prompt Inspection',
    shortDesc: 'Electronic Stability Programme (ESP/TCS) fault or system currently intervening during loss of traction.',
    commonCauses: ['Steering angle sensor calibration loss', 'Wheel speed sensor signal dropout', 'Yaw rate sensor fault', 'Throttle body communication error'],
    safeToDrive: 'Safe under calm conditions, but vehicle stability assistance will not assist during slides, ice, or sudden swerves.',
    recommendedAction: 'Module scan and steering angle sensor zero-point calibration.',
    svgPath: 'M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z',
  },
  {
    id: 'temperature',
    name: 'Engine Temperature',
    color: 'red',
    severity: 'Immediate Stop',
    shortDesc: 'Engine coolant temperature has exceeded maximum safe operating threshold, risking severe head gasket and block warping.',
    commonCauses: ['Electric radiator fan motor failure', 'Thermostat stuck closed', 'Coolant temp sensor circuit open', 'Water pump impeller failure or coolant leak'],
    safeToDrive: 'NO. Stop immediately, turn off engine, and allow to cool. Continued driving will cause catastrophic engine failure.',
    recommendedAction: 'Coolant circuit pressure test, fan relay and temperature sensor resistance check.',
    svgPath: 'M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-2z',
  },
  {
    id: 'tpms',
    name: 'Tyre Pressure (TPMS)',
    color: 'amber',
    severity: 'Caution / Service',
    shortDesc: 'One or more tyres has dropped significantly below recommended pressure, or a wheel sensor battery has expired.',
    commonCauses: ['Tyre puncture or gradual deflation', 'Expired TPMS sensor internal battery', 'Sensor valve stem corrosion', 'TPMS receiver antenna fault'],
    safeToDrive: 'Check tyre pressures with a manual gauge at nearest station. If pressures are normal, sensor requires diagnostic coding.',
    recommendedAction: 'TPMS wireless frequency test, sensor battery inspection, and ECU relearn.',
    svgPath: 'M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7zm-1 11h2v-2h-2v2zm0-4h2V5h-2v4z',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Specialist Fault Diagnosis',
    desc: 'We focus on accurately identifying the cause of electrical and electronic vehicle faults rather than merely swapping parts.',
    detail: 'Modern auto electrical work is science and method. We verify signal integrity, sensor references, and ground loops before recommending replacement.',
    iconName: 'Search',
  },
  {
    title: 'Modern Diagnostic Equipment',
    desc: 'Professional diagnostic equipment used to investigate modern vehicle systems across all major makes and models.',
    detail: 'Equipped with dealership-level scanners, PicoScope digital storage oscilloscopes, smoke leak testers, and CAN-bus breakout boxes.',
    iconName: 'Cpu',
  },
  {
    title: 'Clear Advice',
    desc: 'We explain the fault and recommended repair in straightforward language with no confusing technical jargon.',
    detail: 'You receive clear explanations of what went wrong, what component failed, and what options exist for lasting, cost-effective repair.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'Local Mansfield Service',
    desc: 'A convenient local auto electrical specialist serving Mansfield and surrounding Nottinghamshire communities.',
    detail: 'Centrally situated for customers across Mansfield, Sutton, Kirkby, Forest Town, and Woodhouse with friendly local service you can trust.',
    iconName: 'MapPin',
  },
  {
    title: 'Cars & Light Commercial Vehicles',
    desc: 'Diagnostics and electrical repairs for a wide range of vehicles, from private cars to commercial trades vans.',
    detail: 'Experienced with fleet vans, work transits, diesel particulate systems, auxiliary battery splits, and modern hybrid/stop-start systems.',
    iconName: 'Car',
  },
];

export const PROCESS_STEPS = [
  {
    step: '1',
    title: 'Contact Us',
    desc: 'Tell us about the problem or warning light.',
    detail: 'Give us a quick call on 01623 000000 or submit your vehicle details via our online form. Let us know any warning lights, symptoms, or error codes.',
  },
  {
    step: '2',
    title: 'Diagnose the Fault',
    desc: 'We inspect the vehicle and identify the cause.',
    detail: 'We hook up our dedicated diagnostic equipment, analyze live data parameters, test circuits, and pinpoint the exact source of failure.',
  },
  {
    step: '3',
    title: 'Repair & Get Back on the Road',
    desc: 'We explain the repair options and get the vehicle sorted.',
    detail: 'We clearly outline the repair and cost before doing any work. Once repaired, we clear fault memory, road-test, and verify everything operates safely.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Mark H.',
    location: 'Mansfield Woodhouse',
    vehicle: 'Ford Transit Custom (2021)',
    issue: 'Intermittent Battery Drain & Alternator Fault',
    quote: 'Two other garages told me to replace the battery twice. Mansfield Auto Electrics put an oscilloscope on it and found a parasitic draw in the auxiliary relay loom in under 2 hours. Van starts on the button every morning now. Honest, skilled specialists.',
    rating: 5,
    date: 'February 2026',
  },
  {
    id: '2',
    author: 'Sarah T.',
    location: 'Sutton-in-Ashfield',
    vehicle: 'BMW 320d M Sport',
    issue: 'ABS & Traction Control Warning Lights',
    quote: 'The ABS and traction control lights lit up together with a speedometer flicker. The main dealer wanted silly money just to look at it. Mansfield Auto Electrics diagnosed a cracked reluctor ring on the rear hub, fixed it with zero fuss and explained everything clearly.',
    rating: 5,
    date: 'January 2026',
  },
  {
    id: '3',
    author: 'David P.',
    location: 'Forest Town',
    vehicle: 'Volkswagen Golf Mk7 1.4 TSI',
    issue: 'EPC Light & Misfire under Load',
    quote: 'EPC and engine light kept coming on during dual-carriageway driving. They traced it to a corroded wiring pin going to the throttle body rather than replacing an expensive ECU. Genuine auto electrician who knows what he is doing.',
    rating: 5,
    date: 'March 2026',
  },
];
