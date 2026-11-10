// Page data for Robot-Aware Design and Assembly of Architected Structures.
// Edit titles, subtitle, and source notes here; the page text itself is in
// src/components/projects/. Each video lists its files under public/projects/.
export interface ProjectClip { id: string; project: string; assetProject?: string; assetId?: string; mediaVersion?: string; duration: number; title: string; caption: string; description: string; sourceFile?: string; sourceLabel?: string; sourceUrl?: string; sourceRange: string; audioNote: string; processingNote?: string; captions?: boolean; loop?: boolean; }

export const clipSourceBase = "https://github.com/DreamXLab/DreamXLab.github.io/blob/c4a06d081f7f22f9966cbc5248b7ceb61de8c842";

export const labProjects = [{
  "slug": "architected-structures",
  "title": "Robot-Aware Design and Assembly of Architected Structures",
  "shortTitle": "Architected Structures",
  "topic": "Material architecture · Modular interfaces · Robotic assembly",
  "subtitle": "Integrating Computational Design, Structural Functionality, and Robotic Construction for Diverse Engineering Environments.",
  "description": "Co-designing architected structures, assembly-aware structural interfaces, and robotic construction for diverse engineering environments.",
  "source": "",
  "credit": "",
  "image": "tpms-families.jpg",
  "imageProject": "robotic-block-assembly",
  "imageWidth": 1920,
  "imageHeight": 1080,
  "imageAlt": "Diamond, gyroid, and primitive porous modules in a geometric assembly visualization.",
  "question": "How can complex materials become buildable structures?",
  "abstract": "Material architecture, modular connections, and robotic handling need to be designed together.",
  "heroClips": [],
  "demoClips": [
    "structures-families",
    "structures-assembly"
  ],
  "sourceNotes": [
    "Page copy follows the supplied text, Robot-Aware Design and Assembly of Architected Structures (November 2026).",
    "UF Robotics Workshop — Shuai Li, slide 7: architected module, fabrication reference, connection strategies, and coastal assembly concept. The fabrication photograph is a reference; it does not establish production of the illustrated modules.",
    "Isaac Sim visualizations use the supplied diamond, gyroid, and primitive TPMS slot/tenon models, the Excavator02 appearance model, and local beach assets. Module geometry and full video frames are retained; cast shadows remain disabled. Motion is prescribed, with vertical lifting and insertion along the illustrated joint direction.",
    "The supplied brief identifies NACRE as a coastal application within AMERICA. The coastal project overview provides application context. The displayed robotic assembly renderings are geometric concepts and do not document the field installation of NACRE units."
  ]
}];

export const projectClips: ProjectClip[] = [
  {
    "id": "structures-families",
    "mediaVersion": "vertical-insertion-20261027",
    "duration": 20,
    "title": "Diamond, gyroid, and primitive TPMS geometries",
    "description": "Three labeled TPMS pairs appear in an elevated view: Diamond on the left, Gyroid in the center, and Primitive on the right. Each pair retains its original slot and tenon geometry. All blocks begin at the same center height. In a staggered sequence, each moving tenon lifts vertically, travels above its stationary partner, pauses over the aligned side groove, and lowers straight down into the nominal seated position. Horizontal position stays fixed during each insertion. The final view compares the three assembled pairs. Family names distinguish them independently of shading. Cast shadows are disabled. The shared motion follows the vertical groove direction; it does not validate manufacturing clearance, contact forces, locking, or strength.",
    "sourceLabel": "Six supplied TPMS STL models: diamond, gyroid, and primitive, each with slot and tenon variants",
    "project": "architected-structures",
    "caption": "",
    "sourceRange": "new CAD-based visualization",
    "audioNote": "Silent visualization. Full text alternatives and timed visual descriptions are provided.",
    "processingNote": "Rendered in Isaac Sim 5.1.0 with RTX lighting at 1920 × 1080 and 24 frames per second. Cast shadows and ambient occlusion are disabled. Full source triangle geometry is retained, recentered, and scaled for visualization. Prescribed motion only; no force-based gripping, collision-free planning, insertion tolerance, load capacity, or coastal-performance result is claimed.",
    "assetProject": "robotic-block-assembly",
    "assetId": "tpms-families"
  },
  {
    "id": "structures-assembly",
    "mediaVersion": "vertical-insertion-20261027",
    "duration": 67,
    "title": "Continuous coastal assembly in Isaac Sim",
    "description": "Beside a rendered shoreline, a tracked excavator collects six porous TPMS blocks staged at the same center height. For each block, the illustrative clamp closes and lifts vertically. The arm transfers the block above the growing row, keeping its lower edge clear of the placed partner. After a brief alignment pause above the vertical side groove, the block lowers straight down with no horizontal movement during insertion. The clamp opens only after the block reaches its nominal seated position, then withdraws upward. The machine repositions and repeats the sequence, forming a seven-module segment with the starter block. The camera moves toward the water side for the completed view. Six outlined markers and named phases identify progress without relying on color. The detailed excavator comes from the supplied Unity project; sand textures and beach rocks come from the local Unreal project. Original primitive slot and tenon meshes are retained. Supports, shoreline layout, and water are illustrative. This is prescribed kinematic motion, not a contact-force or wave-response simulation.",
    "sourceLabel": "Supplied Excavator02 model from Unity test02; Brushify beach assets from the local Unreal project; original TPMS primitive STL models",
    "project": "architected-structures",
    "caption": "",
    "sourceRange": "new CAD-based visualization",
    "audioNote": "Silent visualization. Full text alternatives and timed visual descriptions are provided.",
    "processingNote": "Rendered in Isaac Sim 5.1.0 with RTX lighting at 1920 × 1080 and 24 frames per second. Cast shadows and ambient occlusion are disabled. The excavator appearance model is retargeted with new visual pivots and telescoping cylinders; its bucket is replaced by an illustrative clamp. Original TPMS triangle geometry is retained. Unreal sand and rock textures are rebound to USD materials. Prescribed motion only; no force-based gripping, collision-free planning, insertion tolerance, load capacity, or coastal-performance result is claimed. The original TPMS unit convention is multiplied by 0.75 for this scene; this is a visual scale, not confirmation of fabrication dimensions.",
    "assetProject": "robotic-block-assembly",
    "assetId": "excavator-assembly"
  }
];
