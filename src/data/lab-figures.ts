// Image data: file, size, alternative text, long description, and source.
// Files live in public/projects/<project>/.
export interface LabFigure { project: string; file: string; preview?: string; width: number; height: number; title: string; alt: string; description: string; source: string; }

export const labFigures: Record<string, LabFigure> = {
  "module": {
    "project": "robotic-block-assembly",
    "file": "module-geometry.webp",
    "width": 332,
    "height": 321,
    "title": "Design the module.",
    "alt": "Concept rendering of a porous architected block with interconnected curved internal surfaces.",
    "description": "A cutaway cube reveals a complex network of curved internal surfaces and openings. The source presents it under New Designs. This is a design rendering; material properties and wave-resistance measurements are not provided in this figure.",
    "source": "UF Robotics Workshop — Shuai Li, slide 7. New Designs detail."
  },
  "manufacturing": {
    "project": "robotic-block-assembly",
    "file": "manufacturing-reference.webp",
    "width": 398,
    "height": 321,
    "title": "Connect design with fabrication.",
    "alt": "Manufacturing reference image showing a robot-mounted nozzle depositing material in layers.",
    "description": "A robotic arm carries a nozzle above a flat work surface with a layered material deposit. The supplied slide places this image under New Materials. The slide does not establish that this photograph shows fabrication of the particular breakwater modules pictured elsewhere.",
    "source": "UF Robotics Workshop — Shuai Li, slide 7. Manufacturing reference detail."
  },
  "connections": {
    "project": "robotic-block-assembly",
    "file": "connection-strategies-full.webp",
    "width": 1071,
    "height": 589,
    "title": "Let joint geometry guide the assembly sequence.",
    "alt": "Assembly concept comparing tenon, two-way, mortise-and-tenon, and dovetail joints around a multi-robot structure.",
    "description": "Around a central rendering of robots and a modular structure, small diagrams label Original State and Intermediate State and use Pickup, Place, and Push arrows. The alternatives are labeled Tenon joint, Two-way joints, Mortise and tenon joints, and Dovetail joint. The arrows distinguish lifting, placing, and sliding directions. These are illustrated connection strategies, not recorded assembly trials.",
    "source": "UF Robotics Workshop — Shuai Li, slide 7. Connection-strategy detail."
  },
  "breakwater": {
    "project": "robotic-block-assembly",
    "file": "breakwater-assembly.webp",
    "width": 832,
    "height": 571,
    "title": "Place each module within the coastal structure.",
    "alt": "Rendered breakwater assembly concept showing a robot, completed modules, planned modules, and grasping and interlocking insets.",
    "description": "A mobile manipulator stands beside an extended row of interlocking modules along a shoreline. The source labels the completed row as Finished breakwater structure and the planned modules as Queued breakwater structure. Insets show Grasp, Trajectory planning, and Interlock. Text labels distinguish planned and completed parts independently of color. This is a rendered assembly concept, not footage of a constructed coastal installation.",
    "source": "UF Robotics Workshop — Shuai Li, slide 7. Detail extracted from the original composite figure."
  }
};
