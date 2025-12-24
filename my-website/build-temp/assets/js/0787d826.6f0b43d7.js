"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[9495],{

/***/ 6408:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_3_ai_brain_isaac_sim_md_078_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-3-ai-brain-isaac-sim-md-078.json
const site_docs_module_3_ai_brain_isaac_sim_md_078_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-3-ai-brain/isaac-sim","title":"Module 3 - NVIDIA Isaac Sim","description":"Introduction to NVIDIA Isaac Sim","source":"@site/docs/module-3-ai-brain/isaac-sim.md","sourceDirName":"module-3-ai-brain","slug":"/module-3-ai-brain/isaac-sim","permalink":"/docs/module-3-ai-brain/isaac-sim","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/module-3-ai-brain/isaac-sim.md","tags":[],"version":"current","sidebarPosition":4,"frontMatter":{"title":"Module 3 - NVIDIA Isaac Sim","sidebar_position":4},"sidebar":"tutorialSidebar","previous":{"title":"Module 2 - Gazebo Simulation","permalink":"/docs/module-2-digital-twin/gazebo-simulation"},"next":{"title":"Module 4 - Vision-Language-Action Agents","permalink":"/docs/module-4-vla"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-3-ai-brain/isaac-sim.md


const frontMatter = {
	title: 'Module 3 - NVIDIA Isaac Sim',
	sidebar_position: 4
};
const contentTitle = 'Module 3 - NVIDIA Isaac Sim';

const assets = {

};



const toc = [{
  "value": "Introduction to NVIDIA Isaac Sim",
  "id": "introduction-to-nvidia-isaac-sim",
  "level": 2
}, {
  "value": "Omniverse and RTX Rendering",
  "id": "omniverse-and-rtx-rendering",
  "level": 2
}, {
  "value": "NVIDIA Omniverse Platform",
  "id": "nvidia-omniverse-platform",
  "level": 3
}, {
  "value": "RTX Rendering Technology",
  "id": "rtx-rendering-technology",
  "level": 3
}, {
  "value": "Physically Based Rendering (PBR)",
  "id": "physically-based-rendering-pbr",
  "level": 3
}, {
  "value": "Physics-Based Simulation",
  "id": "physics-based-simulation",
  "level": 2
}, {
  "value": "PhysX Engine Integration",
  "id": "physx-engine-integration",
  "level": 3
}, {
  "value": "Multi-Scale Physics",
  "id": "multi-scale-physics",
  "level": 3
}, {
  "value": "Contact and Collision Management",
  "id": "contact-and-collision-management",
  "level": 3
}, {
  "value": "Realistic Sensor Simulation",
  "id": "realistic-sensor-simulation",
  "level": 3
}, {
  "value": "Material Properties",
  "id": "material-properties",
  "level": 3
}, {
  "value": "Robot Articulation in Isaac Sim",
  "id": "robot-articulation-in-isaac-sim",
  "level": 2
}, {
  "value": "USD-Based Robot Modeling",
  "id": "usd-based-robot-modeling",
  "level": 3
}, {
  "value": "Joint Control and Dynamics",
  "id": "joint-control-and-dynamics",
  "level": 3
}, {
  "value": "Articulation API",
  "id": "articulation-api",
  "level": 3
}, {
  "value": "Kinematic and Dynamic Simulation",
  "id": "kinematic-and-dynamic-simulation",
  "level": 3
}, {
  "value": "Domain Randomization",
  "id": "domain-randomization",
  "level": 2
}, {
  "value": "Lighting Randomization",
  "id": "lighting-randomization",
  "level": 3
}, {
  "value": "Material Randomization",
  "id": "material-randomization",
  "level": 3
}, {
  "value": "Geometry Randomization",
  "id": "geometry-randomization",
  "level": 3
}, {
  "value": "Sensor Noise Randomization",
  "id": "sensor-noise-randomization",
  "level": 3
}, {
  "value": "Synthetic Data Generation",
  "id": "synthetic-data-generation",
  "level": 2
}, {
  "value": "Dataset Creation Pipeline",
  "id": "dataset-creation-pipeline",
  "level": 3
}, {
  "value": "Annotation Types",
  "id": "annotation-types",
  "level": 3
}, {
  "value": "Data Pipeline Optimization",
  "id": "data-pipeline-optimization",
  "level": 3
}, {
  "value": "Hands-on Labs",
  "id": "hands-on-labs",
  "level": 2
}, {
  "value": "Lab 1: Import Robot into Isaac Sim",
  "id": "lab-1-import-robot-into-isaac-sim",
  "level": 3
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 4
}, {
  "value": "Steps:",
  "id": "steps",
  "level": 4
}, {
  "value": "Lab 2: Train a Simple Perception Model",
  "id": "lab-2-train-a-simple-perception-model",
  "level": 3
}, {
  "value": "Steps:",
  "id": "steps-1",
  "level": 4
}, {
  "value": "Lab 3: Create Task-Based Simulation",
  "id": "lab-3-create-task-based-simulation",
  "level": 3
}, {
  "value": "Steps:",
  "id": "steps-2",
  "level": 4
}, {
  "value": "Performance Optimization in Isaac Sim",
  "id": "performance-optimization-in-isaac-sim",
  "level": 2
}, {
  "value": "Simulation Optimization Strategies",
  "id": "simulation-optimization-strategies",
  "level": 3
}, {
  "value": "Memory and GPU Management",
  "id": "memory-and-gpu-management",
  "level": 3
}, {
  "value": "Batch Processing",
  "id": "batch-processing",
  "level": 3
}, {
  "value": "Integration with AI Training Workflows",
  "id": "integration-with-ai-training-workflows",
  "level": 2
}, {
  "value": "PyTorch Integration",
  "id": "pytorch-integration",
  "level": 3
}, {
  "value": "Training Loop Integration",
  "id": "training-loop-integration",
  "level": 3
}, {
  "value": "Summary",
  "id": "summary",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "module-3---nvidia-isaac-sim",
        children: "Module 3 - NVIDIA Isaac Sim"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction-to-nvidia-isaac-sim",
      children: "Introduction to NVIDIA Isaac Sim"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NVIDIA Isaac Sim is a next-generation robotics simulator that provides an accurate and interactive 3D environment for developing, training, and testing AI-based robotics applications. Built on NVIDIA Omniverse, Isaac Sim offers photorealistic rendering, accurate physics simulation, and seamless integration with NVIDIA's AI technologies."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac Sim is particularly valuable for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Training vision-based AI models with synthetic data"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing complex robotic behaviors in realistic environments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validating control algorithms before deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prototyping robotic applications without physical hardware"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "omniverse-and-rtx-rendering",
      children: "Omniverse and RTX Rendering"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nvidia-omniverse-platform",
      children: "NVIDIA Omniverse Platform"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NVIDIA Omniverse is a collaboration platform for 3D design and simulation that connects multiple applications to enable real-time, photorealistic rendering and physics simulation. Isaac Sim leverages Omniverse to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Enable multi-app workflows for robotics development"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Provide real-time collaboration capabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Support Physically Based Rendering (PBR) workflows"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate with popular design tools like Maya, Blender, and 3ds Max"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "rtx-rendering-technology",
      children: "RTX Rendering Technology"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "RTX rendering technology uses NVIDIA's RT Cores for hardware-accelerated ray tracing, enabling:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Realistic lighting, shadows, and reflections"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accurate global illumination"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High-fidelity material visualization"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Synthetic data generation with photorealistic quality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Key advantages of RTX rendering in robotics simulation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Photorealistic output"
        }), ": Images closely resemble real-world camera feeds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Domain randomization"
        }), ": Ability to vary lighting, textures, and environments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Synthetic data generation"
        }), ": Create large datasets for training perception models"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reduced sim-to-real gap"
        }), ": More accurate simulation of visual perception challenges"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "physically-based-rendering-pbr",
      children: "Physically Based Rendering (PBR)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "PBR in Isaac Sim ensures that materials behave realistically under different lighting conditions:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper energy conservation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Realistic surface interactions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accurate reflectance models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consistent appearance across lighting conditions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "physics-based-simulation",
      children: "Physics-Based Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac Sim provides state-of-the-art physics simulation capabilities that go beyond traditional robotics simulators:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "physx-engine-integration",
      children: "PhysX Engine Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NVIDIA PhysX is integrated into Isaac Sim for:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accurate multi-body dynamics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complex contact and collision handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Realistic material properties"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Fast GPU-accelerated simulation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "multi-scale-physics",
      children: "Multi-Scale Physics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac Sim handles physics at multiple scales:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Macro scale"
        }), ": Robot locomotion, navigation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Meso scale"
        }), ": Grasping, manipulation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Micro scale"
        }), ": Fine-grained material interactions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "contact-and-collision-management",
      children: "Contact and Collision Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Advanced contact simulation features:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Accurate friction models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deformable object simulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Granular material handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Soft-body dynamics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "realistic-sensor-simulation",
      children: "Realistic Sensor Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In addition to visual accuracy, Isaac Sim simulates the physics of sensor data acquisition:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Camera noise and distortion models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "LIDAR beam divergence and scattering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "IMU drift and bias characteristics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Force/torque sensor dynamics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "material-properties",
      children: "Material Properties"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac Sim supports detailed material properties:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Density and mass distribution"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Elasticity and stiffness"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Friction coefficients"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Texture properties affecting vision"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "robot-articulation-in-isaac-sim",
      children: "Robot Articulation in Isaac Sim"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "usd-based-robot-modeling",
      children: "USD-Based Robot Modeling"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac Sim uses Universal Scene Description (USD) for robot modeling:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Example: Creating a robot articulation in Isaac Sim\nimport omni\nfrom omni.isaac.core import World\nfrom omni.isaac.core.utils.nucleus import get_assets_root_path\nfrom omni.isaac.core.utils.stage import add_reference_to_stage\n\n# Create a world instance\nmy_world = World(stage_units_in_meters=1.0)\n\n# Add a robot from the nucleus\nassets_root_path = get_assets_root_path()\nif assets_root_path is None:\n    print(\"Could not find NVIDIA's Asset Root Path\")\nelse:\n    # Add robot to stage\n    add_reference_to_stage(\n        usd_path=assets_root_path + \"/Isaac/Robots/Franka/franka_alt_fingers.usd\",\n        prim_path=\"/World/Robot\"\n    )\n    \n    # Add the robot to the world\n    my_world.scene.add_fanka(prim_path=\"/World/Robot\", name=\"franka_robot\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "joint-control-and-dynamics",
      children: "Joint Control and Dynamics"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac Sim provides comprehensive joint control capabilities:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Various joint types (revolute, prismatic, spherical)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Joint limits and drive properties"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Torque and velocity control modes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Joint state feedback"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "articulation-api",
      children: "Articulation API"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The Articulation API manages multi-joint robots:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Example: Controlling robot joints\nimport numpy as np\nfrom omni.isaac.core.articulations import ArticulationView\n\n# Get reference to the robot\nrobot = my_world.scene.get_object(\"franka_robot\")\n\n# Access joint positions and velocities\njoint_positions = robot.get_joint_positions()\njoint_velocities = robot.get_joint_velocities()\n\n# Set joint positions (position control)\ntarget_positions = np.array([0.0, -1.0, 0.0, -2.2, 0.0, 1.2, 0.0])\nrobot.set_joint_position_targets(positions=target_positions)\n\n# Apply joint efforts (effort control)\njoint_efforts = np.array([0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1])\nrobot.set_joint_efforts(joint_efforts)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "kinematic-and-dynamic-simulation",
      children: "Kinematic and Dynamic Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac Sim handles both kinematic and dynamic robot simulation:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Forward and inverse kinematics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Dynamic simulation with physics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Collision detection and response"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multi-robot scenarios"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "domain-randomization",
      children: "Domain Randomization"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Domain randomization is a technique used to reduce the sim-to-real gap by varying environmental parameters during training:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lighting-randomization",
      children: "Lighting Randomization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import random\nfrom omni.isaac.core.utils.prims import get_prim_at_path\nfrom pxr import UsdLux\n\n# Randomize environment lighting\ndef randomize_lighting():\n    # Get reference to the light\n    light_prim = get_prim_at_path(\"/World/Light\")\n    \n    # Randomize intensity\n    light_prim.GetAttribute(\"intensity\").Set(random.uniform(100, 1000))\n    \n    # Randomize color temperature\n    light_prim.GetAttribute(\"color\").Set(\n        Gf.Vec3f(random.uniform(0.8, 1.0), random.uniform(0.8, 1.0), random.uniform(0.8, 1.0))\n    )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "material-randomization",
      children: "Material Randomization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "from omni.isaac.core.materials import OmniPBR\n\n# Randomize surface materials\ndef randomize_materials():\n    # Create random PBR material\n    material = OmniPBR(\n        prim_path=\"/World/Materials/random_material\",\n        color=(random.uniform(0, 1), random.uniform(0, 1), random.uniform(0, 1)),\n        roughness=random.uniform(0.1, 0.9),\n        metallic=random.uniform(0.0, 1.0)\n    )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "geometry-randomization",
      children: "Geometry Randomization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import numpy as np\n\n# Randomize object positions and rotations\ndef randomize_geometries():\n    # Randomize object positions\n    for obj in object_list:\n        pos = obj.get_world_pose()[0]\n        new_pos = pos + np.random.uniform(-0.1, 0.1, size=3)\n        obj.set_world_pose(position=new_pos)\n        \n        # Randomize object rotations\n        rot = obj.get_world_pose()[1]\n        new_rot = rot + np.random.uniform(-0.2, 0.2, size=4)\n        obj.set_world_pose(rotation=new_rot)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sensor-noise-randomization",
      children: "Sensor Noise Randomization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Randomize sensor noise parameters\ndef randomize_sensor_noise():\n    camera = my_world.scene.get_object(\"camera\")\n    \n    # Add random noise to camera images\n    camera.add_noise_model(\n        \"RGBNoiseModel\",\n        rgb_noise_mean=[random.uniform(-0.01, 0.01)] * 3,\n        rgb_noise_stddev=[random.uniform(0.005, 0.02)] * 3\n    )\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "synthetic-data-generation",
      children: "Synthetic Data Generation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "dataset-creation-pipeline",
      children: "Dataset Creation Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac Sim enables the creation of large-scale synthetic datasets:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import omni.replicator.core as rep\n\n# Define a synthetic data generation pipeline\nwith rep.new_layer():\n    # Define camera\n    camera = rep.create.camera(\n        position=(-1, -1, 0.5),\n        rotation=(0, 0, 0)\n    )\n    \n    # Define environment\n    env = rep.create.environment(\n        prim_path=\"/World/Environment\",\n        name=\"random_environment\",\n        position=(0, 0, 0)\n    )\n    \n    # Register writers for different modalities\n    rgb_annotator = rep.AnnotatorRegistry.get_annotator(\"rgb\")\n    rgb_annotator.attach([camera])\n    \n    bbox_annotator = rep.AnnotatorRegistry.get_annotator(\"bbox\")\n    bbox_annotator.attach([camera])\n    \n    semantic_annotator = rep.AnnotatorRegistry.get_annotator(\"semantic_segmentation\")\n    semantic_annotator.attach([camera])\n    \n    # Define trigger for data collection\n    trigger = rep.trigger.on_frame(num_frames=1000)\n    \n    # Execute the generation pipeline\n    rep.orchestrator.run(trigger)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "annotation-types",
      children: "Annotation Types"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac Sim provides multiple annotation types for synthetic data:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RGB Images"
        }), ": Photorealistic color images"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Depth Maps"
        }), ": Per-pixel distance information"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Semantic Segmentation"
        }), ": Per-pixel object class labels"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Instance Segmentation"
        }), ": Per-pixel object instance labels"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bounding Boxes"
        }), ": 2D/3D bounding box annotations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pose Information"
        }), ": Object pose in 3D space"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "data-pipeline-optimization",
      children: "Data Pipeline Optimization"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Optimizing data generation pipeline\ndef optimize_pipeline():\n    # Enable multi-threaded rendering\n    omni.timeline.get_timeline_interface().set_auto_update(True)\n    \n    # Set appropriate resolution\n    render_product_path = \"/Render/RenderProduct\"\n    render_resolution = (640, 480)\n    rep.set_render_product_resolution(render_resolution, render_product_path)\n    \n    # Batch processing for efficiency\n    batch_size = 32\n    rep.orchestrator.set_batch_size(batch_size)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hands-on-labs",
      children: "Hands-on Labs"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-1-import-robot-into-isaac-sim",
      children: "Lab 1: Import Robot into Isaac Sim"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this lab, you will learn how to import a robot into NVIDIA Isaac Sim and set up basic simulation."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NVIDIA Isaac Sim installed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Omniverse client access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python 3.7+ environment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CUDA-capable GPU"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "steps",
      children: "Steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Launch Isaac Sim:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Open Omniverse Launcher"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Install and launch Isaac Sim"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Wait for initial assets to download"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create a new stage:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "In Isaac Sim, go to File → New Stage"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Save the stage as ", (0,jsx_runtime.jsx)(_components.code, {
              children: "robot_lab.usd"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Import a robot using Python scripting:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "# Create a Python script file called import_robot.py\nimport omni\nfrom omni.isaac.core import World\nfrom omni.isaac.core.utils.nucleus import get_assets_root_path\nfrom omni.isaac.core.utils.stage import add_reference_to_stage\nimport numpy as np\n\n# Initialize World\nmy_world = World(stage_units_in_meters=1.0)\n\n# Get path to NVIDIA assets\nassets_root_path = get_assets_root_path()\n\nif assets_root_path is None:\n    print(\"Could not find NVIDIA's Asset Root Path\")\nelse:\n    # Add a robot from the asset library\n    franka_usd_path = assets_root_path + \"/Isaac/Robots/Franka/franka_alt_fingers.usd\"\n    add_reference_to_stage(\n        usd_path=franka_usd_path,\n        prim_path=\"/World/Franka\"\n    )\n\n    # Add the robot to the scene\n    my_world.scene.add_franka(prim_path=\"/World/Franka\", name=\"my_franka\")\n\n    # Reset simulation with robot\n    my_world.reset()\n\n    # Print robot information\n    franka = my_world.scene.get_object(\"my_franka\")\n    print(f\"Robot base position: {franka.get_world_pose()[0]}\")\n\n    # Step physics\n    for i in range(100):\n        my_world.step(render=True)\n\nprint(\"Robot successfully imported and simulated!\")\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Run the script in Isaac Sim:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Open the Script Editor (Window → Script Editor)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Paste the script"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run the script using the execute button"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Explore the robot in the viewport:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use the viewport controls to navigate around the robot"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Select the robot in the stage window to see its structure"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Note the joint hierarchy in the stage window"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Try controlling the robot:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "# Add this to your script to control the robot\nimport time\n\n# Get the Franka robot\nfranka = my_world.scene.get_object(\"my_franka\")\n\n# Set initial joint positions\njoint_positions = np.array([0.0, -1.0, 0.0, -2.2, 0.0, 1.2, 0.0])\nfranka.set_joint_position_targets(positions=joint_positions)\n\n# Run simulation for 1000 steps\nfor i in range(1000):\n    my_world.step(render=True)\n    time.sleep(0.01)\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-2-train-a-simple-perception-model",
      children: "Lab 2: Train a Simple Perception Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this lab, you will use Isaac Sim to generate synthetic data for training a simple perception model."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "steps-1",
      children: "Steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Set up a scene for data collection:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "# Create a Python script called perception_training.py\nimport omni\nimport numpy as np\nfrom omni.isaac.core import World\nfrom omni.isaac.core.utils.stage import add_reference_to_stage\nfrom omni.isaac.core.utils.prims import create_prim\nfrom omni.isaac.core.utils.nucleus import get_assets_root_path\n\n# Initialize world\nmy_world = World(stage_units_in_meters=1.0)\n\n# Create a simple environment with objects\n# Add a ground plane\ncreate_prim(\n    prim_path=\"/World/ground_plane\",\n    prim_type=\"Plane\",\n    scale=np.array([10, 10, 1]),\n    position=np.array([0, 0, 0])\n)\n\n# Add some objects of interest\nassets_root_path = get_assets_root_path()\nif assets_root_path:\n    # Add a cube\n    add_reference_to_stage(\n        usd_path=assets_root_path + \"/Isaac/Props/Blocks/block_instanceable.usd\",\n        prim_path=\"/World/Block\"\n    )\n\nmy_world.reset()\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add a camera for data collection:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "from omni.isaac.sensor import Camera\nfrom omni.vision.annotators import AnnotatorRegistry\n\n# Add camera at a fixed position\ncam = Camera(\n    prim_path=\"/World/Camera\",\n    position=np.array([2.0, 2.0, 1.0]),\n    orientation=np.array([-0.25, 0.25, 0.25, 0.75])  # Quaternion\n)\n\n# Initialize the camera\nmy_world.scene.add_object(cam)\ncam.initialize()\ncam.set_focal_length(24.0)\ncam.set_resolution((640, 480))\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Set up annotation for synthetic data:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "# Register annotators for RGB and bounding box\nrgb_annotator = AnnotatorRegistry.get_annotator(\"rgb\")\nrgb_annotator.attach([cam])\n\nbbox_annotator = AnnotatorRegistry.get_annotator(\"bbox\")\nbbox_annotator.attach([cam])\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Generate synthetic data:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "import cv2\nimport os\nfrom pathlib import Path\n\n# Create directory for data\ndata_dir = Path(\"synthetic_data\")\ndata_dir.mkdir(exist_ok=True)\n\n# Generate multiple data samples\nfor i in range(50):  # Generate 50 images\n    # Randomize object positions slightly\n    block_pos = np.array([\n        np.random.uniform(-1, 1),\n        np.random.uniform(-1, 1),\n        0.1\n    ])\n    \n    # Get reference to block and set position\n    from omni.isaac.core.utils.prims import get_prim_at_path\n    block_prim = get_prim_at_path(\"/World/Block\")\n    if block_prim:\n        from pxr import Gf\n        block_prim.GetAttribute(\"xformOp:translate\").Set(Gf.Vec3d(*block_pos))\n    \n    # Step simulation to update positions\n    my_world.step(render=True)\n    \n    # Get RGB image\n    rgb_data = rgb_annotator.get_data()  # This gets the RGB data\n    \n    # Save image\n    if 'rgba' in rgb_data:\n        img = rgb_data['rgba'][:, :, :3]  # Remove alpha channel\n        cv2.imwrite(f\"synthetic_data/image_{i:03d}.png\", cv2.cvtColor(img, cv2.COLOR_RGB2BGR))\n    \n    # Get bounding box annotations\n    bbox_data = bbox_annotator.get_data()\n    \n    # Save bounding box annotations\n    with open(f\"synthetic_data/annotations_{i:03d}.txt\", 'w') as f:\n        if 'bbox' in bbox_data:\n            for obj in bbox_data['bbox']:\n                # Write in YOLO format: class_id center_x center_y width height\n                f.write(f\"0 {obj['x']:.4f} {obj['y']:.4f} {obj['width']:.4f} {obj['height']:.4f}\\n\")\n\nprint(\"Synthetic data generation complete!\")\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-3-create-task-based-simulation",
      children: "Lab 3: Create Task-Based Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this lab, you will create a complete task-based simulation environment and implement a simple task."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "steps-2",
      children: "Steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create a pick-and-place workspace:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "# Create pick_place_task.py\nimport omni\nimport numpy as np\nfrom omni.isaac.core import World\nfrom omni.isaac.core.utils.stage import add_reference_to_stage\nfrom omni.isaac.core.utils.prims import create_prim\nfrom omni.isaac.core.utils.nucleus import get_assets_root_path\nfrom omni.isaac.core.utils.viewports import set_camera_view\nimport math\n\n# Initialize world with specific gravity\nmy_world = World(stage_units_in_meters=1.0)\nmy_world.scene.enable_gravity(True)\n\n# Set up camera view\nset_camera_view(eye=np.array([2.5, 2.5, 2.0]), target=np.array([0, 0, 0.5]))\n\n# Add environment elements\nassets_root_path = get_assets_root_path()\nif assets_root_path is not None:\n    # Add table\n    add_reference_to_stage(\n        usd_path=assets_root_path + \"/Isaac/Props/Table/table.usd\",\n        prim_path=\"/World/Table\"\n    )\n    \n    # Add robot\n    franka_usd_path = assets_root_path + \"/Isaac/Robots/Franka/franka_alt_fingers.usd\"\n    add_reference_to_stage(\n        usd_path=franka_usd_path,\n        prim_path=\"/World/Franka\"\n    )\n    \n    # Add cube to pick\n    cube_path = assets_root_path + \"/Isaac/Props/Blocks/block_instanceable.usd\"\n    add_reference_to_stage(\n        usd_path=cube_path,\n        prim_path=\"/World/Cube\"\n    )\n\nmy_world.reset()\nprint(\"Pick and place environment initialized!\")\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Implement the pick and place task:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "from omni.isaac.core.articulations import ArticulationView\nfrom omni.isaac.core.utils.prims import get_prim_at_path\nfrom pxr import Gf, UsdPhysics\nimport torch\n\n# Get robot and object references\nfranka = my_world.scene.get_object(\"franka\")\ncube = my_world.scene.get_object(\"cube\")\n\n# Function to calculate inverse kinematics\ndef compute_ik_target(robot, target_pos, target_rot):\n    # This is a simplified IK calculation\n    # In practice, you would use a more sophisticated IK solver\n    current_ee_pos = robot.get_end_effector_frame()[0]\n    \n    # Calculate position difference\n    pos_diff = target_pos - current_ee_pos\n    \n    # Move towards target gradually\n    joint_targets = robot.get_joint_positions()\n    # Apply IK solution to joints (simplified)\n    return joint_targets\n\n# Main task execution loop\ndef execute_pick_and_place():\n    # Move to initial position above cube\n    initial_pos = np.array([0.4, 0.0, 0.5])  # Position above cube\n    initial_rot = np.array([0.707, 0.0, 0.707, 0.0])  # Orientation for gripper\n    \n    # Move to pre-grasp position\n    print(\"Moving to pre-grasp position...\")\n    for _ in range(100):\n        franka.set_world_pose(position=initial_pos, orientation=initial_rot)\n        my_world.step(render=True)\n    \n    # Move down to grasp position\n    grasp_pos = np.array([0.4, 0.0, 0.25])  # Lower to cube level\n    print(\"Moving to grasp position...\")\n    for _ in range(100):\n        franka.set_world_pose(position=grasp_pos, orientation=initial_rot)\n        my_world.step(render=True)\n    \n    # Close gripper (simplified)\n    print(\"Grasping object...\")\n    # Set gripper joint positions to closed position\n    gripper_joints = franka.get_active_joints()[7:9]  # Assuming last two joints are gripper\n    franka.set_joint_position_targets(np.array([0.04, 0.04]), joint_ids=[7, 8])\n    for _ in range(50):\n        my_world.step(render=True)\n    \n    # Lift object\n    lift_pos = np.array([0.4, 0.0, 0.5])  # Lift back up\n    print(\"Lifting object...\")\n    for _ in range(100):\n        franka.set_world_pose(position=lift_pos, orientation=initial_rot)\n        my_world.step(render=True)\n    \n    # Move to target position\n    target_pos = np.array([-0.3, 0.3, 0.5])  # Target position\n    print(\"Moving to target position...\")\n    for _ in range(200):\n        franka.set_world_pose(position=target_pos, orientation=initial_rot)\n        my_world.step(render=True)\n    \n    # Release object\n    print(\"Releasing object...\")\n    franka.set_joint_position_targets(np.array([0.02, 0.02]), joint_ids=[7, 8])  # Open gripper\n    for _ in range(50):\n        my_world.step(render=True)\n    \n    print(\"Pick and place task complete!\")\n\n# Run the task\nexecute_pick_and_place()\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add domain randomization to the task:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "# Function to randomize environment parameters\ndef randomize_environment():\n    # Randomize lighting\n    light_prim = get_prim_at_path(\"/World/light\")\n    if light_prim:\n        # Randomize intensity between 500 and 1500\n        intensity = np.random.uniform(500, 1500)\n        light_prim.GetAttribute(\"intensity\").Set(intensity)\n        \n        # Randomize color temperature\n        color = Gf.Vec3f(\n            np.random.uniform(0.8, 1.0),\n            np.random.uniform(0.8, 1.0),\n            np.random.uniform(0.8, 1.0)\n        )\n        light_prim.GetAttribute(\"color\").Set(color)\n    \n    # Randomize cube position\n    cube_pos = np.array([\n        np.random.uniform(0.3, 0.5),  # X between 0.3 and 0.5\n        np.random.uniform(-0.1, 0.1),  # Y between -0.1 and 0.1\n        0.2  # Fixed Z height on table\n    ])\n    cube.set_world_pose(position=cube_pos)\n    \n    print(\"Environment randomized!\")\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "performance-optimization-in-isaac-sim",
      children: "Performance Optimization in Isaac Sim"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "simulation-optimization-strategies",
      children: "Simulation Optimization Strategies"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Viewport Optimization"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Disable unnecessary rendering features"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use lower resolution during training"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Set appropriate render quality settings"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Physics Optimization"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Adjust solver iterations based on needed accuracy"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use appropriate substep configuration"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Optimize contact reporting settings"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Scene Complexity Management"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use Level of Detail (LOD) models"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implement occlusion culling"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Optimize mesh complexity"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "memory-and-gpu-management",
      children: "Memory and GPU Management"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Example: Managing GPU memory in Isaac Sim\nimport omni\nfrom omni.isaac.core.utils.settings import get_settings\n\n# Configure simulation settings for optimal performance\nsettings = get_settings()\nsettings.set(\"/app/renderer/enabled\", True)\nsettings.set(\"/app/renderer/multi_gpu/enabled\", False)  # Set to True if multiple GPUs available\nsettings.set(\"/app/renderer/quality\", 0)  # 0 = low, 1 = medium, 2 = high\n\n# Configure physics settings\nsettings.set(\"/physics_solver_iterations\", 4)  # Lower for faster simulation\nsettings.set(\"/physics_substeps\", 1)  # Adjust based on stability needs\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "batch-processing",
      children: "Batch Processing"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For large-scale synthetic data generation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Batch processing setup\ndef setup_batch_processing(num_scenes=4):\n    # Enable multi-view rendering\n    for i in range(num_scenes):\n        # Create separate worlds for batch processing if needed\n        pass\n    \n    # Configure batch parameters\n    rep.orchestrator.set_num_environments(num_scenes)\n    rep.orchestrator.set_batch_size(16)\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "integration-with-ai-training-workflows",
      children: "Integration with AI Training Workflows"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac Sim seamlessly integrates with popular AI training frameworks:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "pytorch-integration",
      children: "PyTorch Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import torch\nimport torchvision.transforms as transforms\nfrom omni.vision.annotators import AnnotatorRegistry\n\n# Example: Processing Isaac Sim RGB data in PyTorch\ndef process_rgb_for_pytorch(rgb_data):\n    # Convert to PyTorch tensor\n    image_tensor = torch.from_numpy(rgb_data['rgba'][:, :, :3])\n    \n    # Normalize the image\n    normalize = transforms.Normalize(\n        mean=[0.485, 0.456, 0.406],\n        std=[0.229, 0.224, 0.225]\n    )\n    \n    # Convert from HWC to CHW format\n    image_tensor = image_tensor.permute(2, 0, 1).float() / 255.0\n    \n    # Apply normalization\n    image_tensor = normalize(image_tensor)\n    \n    return image_tensor.unsqueeze(0)  # Add batch dimension\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "training-loop-integration",
      children: "Training Loop Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# Sim-to-real training loop example\ndef train_with_isaac_sim(model, optimizer, num_epochs):\n    for epoch in range(num_epochs):\n        # Generate synthetic data from Isaac Sim\n        synthetic_data = generate_synthetic_data()\n        \n        # Process the data for training\n        images, labels = process_isaac_data(synthetic_data)\n        \n        # Train the model\n        optimizer.zero_grad()\n        outputs = model(images)\n        loss = calculate_loss(outputs, labels)\n        loss.backward()\n        optimizer.step()\n        \n        print(f\"Epoch {epoch}, Loss: {loss.item()}\")\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this module, you've learned about NVIDIA Isaac Sim, including:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The Omniverse platform and RTX rendering technology"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Physics-based simulation capabilities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Robot articulation in USD format"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Domain randomization techniques"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Synthetic data generation for AI training"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance optimization strategies"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration with AI training workflows"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the hands-on labs, you imported a robot model into Isaac Sim, generated synthetic perception data, and created a task-based simulation with domain randomization. These skills are crucial for developing advanced robotics applications that require realistic simulation and high-quality synthetic training data for embodied AI systems."
    })]
  });
}
function MDXContent(props = {}) {
  const {wrapper: MDXLayout} = {
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return MDXLayout ? (0,jsx_runtime.jsx)(MDXLayout, {
    ...props,
    children: (0,jsx_runtime.jsx)(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}



/***/ }),

/***/ 8453:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ useMDXComponents),
/* harmony export */   x: () => (/* binding */ MDXProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/**
 * @import {MDXComponents} from 'mdx/types.js'
 * @import {Component, ReactElement, ReactNode} from 'react'
 */

/**
 * @callback MergeComponents
 *   Custom merge function.
 * @param {Readonly<MDXComponents>} currentComponents
 *   Current components from the context.
 * @returns {MDXComponents}
 *   Additional components.
 *
 * @typedef Props
 *   Configuration for `MDXProvider`.
 * @property {ReactNode | null | undefined} [children]
 *   Children (optional).
 * @property {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @property {boolean | null | undefined} [disableParentContext=false]
 *   Turn off outer component context (default: `false`).
 */



/** @type {Readonly<MDXComponents>} */
const emptyComponents = {}

const MDXContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents)

/**
 * Get current components from the MDX Context.
 *
 * @param {Readonly<MDXComponents> | MergeComponents | null | undefined} [components]
 *   Additional components to use or a function that creates them (optional).
 * @returns {MDXComponents}
 *   Current components.
 */
function useMDXComponents(components) {
  const contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext)

  // Memoize to avoid unnecessary top-level context changes
  return react__WEBPACK_IMPORTED_MODULE_0__.useMemo(
    function () {
      // Custom merge via a function prop
      if (typeof components === 'function') {
        return components(contextComponents)
      }

      return {...contextComponents, ...components}
    },
    [contextComponents, components]
  )
}

/**
 * Provider for MDX context.
 *
 * @param {Readonly<Props>} properties
 *   Properties.
 * @returns {ReactElement}
 *   Element.
 * @satisfies {Component}
 */
function MDXProvider(properties) {
  /** @type {Readonly<MDXComponents>} */
  let allComponents

  if (properties.disableParentContext) {
    allComponents =
      typeof properties.components === 'function'
        ? properties.components(emptyComponents)
        : properties.components || emptyComponents
  } else {
    allComponents = useMDXComponents(properties.components)
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement(
    MDXContext.Provider,
    {value: allComponents},
    properties.children
  )
}


/***/ })

}]);