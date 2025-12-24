"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[3503],{

/***/ 8404:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_hardware_md_a24_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-hardware-md-a24.json
const site_docs_hardware_md_a24_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"hardware","title":"Hardware Requirements (Optional)","description":"Overview","source":"@site/docs/hardware.md","sourceDirName":".","slug":"/hardware","permalink":"/docs/hardware","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/hardware.md","tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"title":"Hardware Requirements (Optional)","sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"Module 4 - Vision-Language-Action Agents","permalink":"/docs/module-4-vla"},"next":{"title":"Tools & Software Setup","permalink":"/docs/tools"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/hardware.md


const frontMatter = {
	title: 'Hardware Requirements (Optional)',
	sidebar_position: 6
};
const contentTitle = 'Hardware Requirements (Optional)';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Computing Hardware",
  "id": "computing-hardware",
  "level": 2
}, {
  "value": "Recommended Computer Specifications",
  "id": "recommended-computer-specifications",
  "level": 3
}, {
  "value": "Minimum Specifications",
  "id": "minimum-specifications",
  "level": 4
}, {
  "value": "Recommended Specifications (for Isaac Sim and AI workloads)",
  "id": "recommended-specifications-for-isaac-sim-and-ai-workloads",
  "level": 4
}, {
  "value": "NVIDIA GPU Requirements (for Isaac Sim)",
  "id": "nvidia-gpu-requirements-for-isaac-sim",
  "level": 3
}, {
  "value": "Robot Platforms",
  "id": "robot-platforms",
  "level": 2
}, {
  "value": "Entry-Level Platforms",
  "id": "entry-level-platforms",
  "level": 3
}, {
  "value": "Raspberry Pi-Based Robots",
  "id": "raspberry-pi-based-robots",
  "level": 4
}, {
  "value": "Arduino-Based Platforms",
  "id": "arduino-based-platforms",
  "level": 4
}, {
  "value": "Intermediate Platforms",
  "id": "intermediate-platforms",
  "level": 3
}, {
  "value": "TurtleBot Series",
  "id": "turtlebot-series",
  "level": 4
}, {
  "value": "JetBot",
  "id": "jetbot",
  "level": 4
}, {
  "value": "Advanced Platforms",
  "id": "advanced-platforms",
  "level": 3
}, {
  "value": "Clearpath Robotics Platforms",
  "id": "clearpath-robotics-platforms",
  "level": 4
}, {
  "value": "DIY Advanced Platforms",
  "id": "diy-advanced-platforms",
  "level": 4
}, {
  "value": "Sensors",
  "id": "sensors",
  "level": 2
}, {
  "value": "Vision Sensors",
  "id": "vision-sensors",
  "level": 3
}, {
  "value": "Range Sensors",
  "id": "range-sensors",
  "level": 3
}, {
  "value": "Inertial Sensors",
  "id": "inertial-sensors",
  "level": 3
}, {
  "value": "Other Sensors",
  "id": "other-sensors",
  "level": 3
}, {
  "value": "Actuators",
  "id": "actuators",
  "level": 2
}, {
  "value": "Motors",
  "id": "motors",
  "level": 3
}, {
  "value": "Motor Controllers",
  "id": "motor-controllers",
  "level": 3
}, {
  "value": "Communication Hardware",
  "id": "communication-hardware",
  "level": 2
}, {
  "value": "Wireless Communication",
  "id": "wireless-communication",
  "level": 3
}, {
  "value": "Wired Communication",
  "id": "wired-communication",
  "level": 3
}, {
  "value": "Power Systems",
  "id": "power-systems",
  "level": 2
}, {
  "value": "Batteries",
  "id": "batteries",
  "level": 3
}, {
  "value": "Power Management",
  "id": "power-management",
  "level": 3
}, {
  "value": "Additional Tools",
  "id": "additional-tools",
  "level": 2
}, {
  "value": "Mechanical Components",
  "id": "mechanical-components",
  "level": 3
}, {
  "value": "Development Tools",
  "id": "development-tools",
  "level": 3
}, {
  "value": "Budget Considerations",
  "id": "budget-considerations",
  "level": 2
}, {
  "value": "Low Budget (&lt; $200 USD)",
  "id": "low-budget--200-usd",
  "level": 3
}, {
  "value": "Mid Budget ($200 - $800 USD)",
  "id": "mid-budget-200---800-usd",
  "level": 3
}, {
  "value": "High Budget ($800+ USD)",
  "id": "high-budget-800-usd",
  "level": 3
}, {
  "value": "Safety Considerations",
  "id": "safety-considerations",
  "level": 2
}, {
  "value": "Electrical Safety",
  "id": "electrical-safety",
  "level": 3
}, {
  "value": "Mechanical Safety",
  "id": "mechanical-safety",
  "level": 3
}, {
  "value": "Operational Safety",
  "id": "operational-safety",
  "level": 3
}, {
  "value": "Where to Purchase",
  "id": "where-to-purchase",
  "level": 2
}, {
  "value": "Online Retailers",
  "id": "online-retailers",
  "level": 3
}, {
  "value": "Specialized Robotics Retailers",
  "id": "specialized-robotics-retailers",
  "level": 3
}, {
  "value": "Local Options",
  "id": "local-options",
  "level": 3
}, {
  "value": "Assembly and Integration",
  "id": "assembly-and-integration",
  "level": 2
}, {
  "value": "Required Tools",
  "id": "required-tools",
  "level": 3
}, {
  "value": "Assembly Considerations",
  "id": "assembly-considerations",
  "level": 3
}, {
  "value": "Maintenance and Support",
  "id": "maintenance-and-support",
  "level": 2
}, {
  "value": "Regular Maintenance",
  "id": "regular-maintenance",
  "level": 3
}, {
  "value": "Troubleshooting",
  "id": "troubleshooting",
  "level": 3
}, {
  "value": "Next Steps",
  "id": "next-steps",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    header: "header",
    li: "li",
    ol: "ol",
    p: "p",
    strong: "strong",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "hardware-requirements-optional",
        children: "Hardware Requirements (Optional)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This section outlines optional hardware components that can enhance your learning experience and allow you to apply the concepts from this course to physical robots. While the course primarily focuses on simulation, having access to physical hardware can provide valuable real-world experience."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "computing-hardware",
      children: "Computing Hardware"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recommended-computer-specifications",
      children: "Recommended Computer Specifications"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For optimal performance when working with robotics simulation and AI:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "minimum-specifications",
      children: "Minimum Specifications"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CPU"
        }), ": Quad-core processor (Intel i5 or AMD Ryzen 5)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RAM"
        }), ": 8 GB"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GPU"
        }), ": Integrated graphics or entry-level dedicated GPU"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage"
        }), ": 250 GB SSD"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OS"
        }), ": Ubuntu 20.04/22.04, Windows 10/11, or macOS 10.15+"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "recommended-specifications-for-isaac-sim-and-ai-workloads",
      children: "Recommended Specifications (for Isaac Sim and AI workloads)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "CPU"
        }), ": Hexa-core or more (Intel i7/i9 or AMD Ryzen 7/9)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RAM"
        }), ": 16 GB or more"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GPU"
        }), ": NVIDIA RTX 2070 or higher (with CUDA support)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VRAM"
        }), ": 8 GB or more (11 GB+ for Isaac Sim)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage"
        }), ": 500 GB+ SSD"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OS"
        }), ": Ubuntu 22.04 LTS (preferred for robotics development)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "nvidia-gpu-requirements-for-isaac-sim",
      children: "NVIDIA GPU Requirements (for Isaac Sim)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NVIDIA GPU with Compute Capability 6.0 or higher"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "6 GB+ VRAM (8 GB+ recommended)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Latest NVIDIA drivers installed (495.44+)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "CUDA toolkit compatible with your GPU"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "robot-platforms",
      children: "Robot Platforms"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "entry-level-platforms",
      children: "Entry-Level Platforms"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "raspberry-pi-based-robots",
      children: "Raspberry Pi-Based Robots"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Raspberry Pi 4 Model B"
        }), " (4GB or 8GB RAM recommended)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Camera Module"
        }), " (Raspberry Pi Camera V2 or HQ Camera)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Motor Controller"
        }), " (PCA9685 PWM/Servo Driver or L298N)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Motors"
        }), " (DC motors, servo motors)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chassis Kit"
        }), " (various options available)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Power Supply"
        }), " (battery pack with appropriate voltage regulation)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "arduino-based-platforms",
      children: "Arduino-Based Platforms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Arduino Uno/Nano/ESP32"
        }), " for basic control systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Motor Shield"
        }), " for driving motors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sensors"
        }), " (ultrasonic, IR, etc.)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.strong, {
          children: "Wheels and chassis components"
        })
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "intermediate-platforms",
      children: "Intermediate Platforms"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "turtlebot-series",
      children: "TurtleBot Series"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TurtleBot 3 Burger/Waffle"
        }), " (affordable and well-supported)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete ROS-compatible platform"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Built-in LIDAR and camera"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Extensive documentation and tutorials"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "jetbot",
      children: "JetBot"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NVIDIA Jetson Nano-based educational robot"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "AI capabilities built-in"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Camera and motor components included"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Designed for learning AI and robotics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "advanced-platforms",
      children: "Advanced Platforms"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "clearpath-robotics-platforms",
      children: "Clearpath Robotics Platforms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jackal"
        }), " (outdoor mobile robot platform)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "TurtleBot 4"
        }), " (latest generation)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Husky"
        }), " (industrial-grade platform)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "diy-advanced-platforms",
      children: "DIY Advanced Platforms"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jetson-based systems"
        }), " (Jetson Orin, Xavier NX)"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Custom manipulator arms (UR5, Franka Emika Panda alternatives)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Advanced sensors (Intel RealSense, Ouster LIDAR)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sensors",
      children: "Sensors"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vision-sensors",
      children: "Vision Sensors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RGB Cameras"
        }), ": Standard webcams, Raspberry Pi Camera"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Depth Cameras"
        }), ": Intel RealSense series, Orbbec Astra"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stereo Cameras"
        }), ": ZED stereo camera"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Global Shutter Cameras"
        }), ": For fast motion capture"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "range-sensors",
      children: "Range Sensors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LIDAR"
        }), ":", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RPLIDAR A1/A2 (2D, affordable)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "YDLIDAR X4/X2S (2D, good quality)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hokuyo URG-04LX-UG01 (2D, precise)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Livox Mid-360 (3D, advanced)"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inertial-sensors",
      children: "Inertial Sensors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IMU"
        }), " (Inertial Measurement Unit):", "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "MPU-6050 (basic, low cost)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "BNO055 (integrated, easy to use)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Advanced tactical-grade IMUs for precision applications"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "other-sensors",
      children: "Other Sensors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Encoders"
        }), ": For precise wheel rotation measurement"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Force/Torque Sensors"
        }), ": For manipulation tasks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GPS Modules"
        }), ": For outdoor navigation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Environmental Sensors"
        }), ": Temperature, humidity, air quality"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "actuators",
      children: "Actuators"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "motors",
      children: "Motors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DC Motors"
        }), ": Basic movement, various sizes and power ratings"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Stepper Motors"
        }), ": Precise angular positioning"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Servo Motors"
        }), ": Limited rotation with position feedback"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Linear Actuators"
        }), ": For extending/retracting mechanisms"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "motor-controllers",
      children: "Motor Controllers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "H-Bridge Drivers"
        }), ": L298N, L293D for DC motors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ESC"
        }), " (Electronic Speed Controllers) for brushless motors"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Servo Controllers"
        }), ": PCA9685 for multiple servos"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Motor Driver Boards"
        }), ": Pololu, SparkFun options"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "communication-hardware",
      children: "Communication Hardware"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wireless-communication",
      children: "Wireless Communication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "WiFi Modules"
        }), ": ESP8266, ESP32 for IoT connectivity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bluetooth"
        }), ": For short-range communication"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RF Modules"
        }), ": For longer-range communication"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cellular Modules"
        }), ": For remote operations (4G/5G)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "wired-communication",
      children: "Wired Communication"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "USB Adapters"
        }), ": For various sensors and cameras"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Serial Interfaces"
        }), ": UART, SPI, I2C for sensor communication"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Ethernet"
        }), ": For reliable high-bandwidth communication"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "power-systems",
      children: "Power Systems"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "batteries",
      children: "Batteries"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LiPo Batteries"
        }), ": High power density (use with proper BMS)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LiFePO4 Batteries"
        }), ": Safer, longer lifespan"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "NiMH Batteries"
        }), ": Safer but lower energy density"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Power Banks"
        }), ": For testing and prototyping"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "power-management",
      children: "Power Management"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Voltage Regulators"
        }), ": To provide stable voltages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Power Distribution Boards"
        }), ": To connect multiple components"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Battery Management Systems"
        }), ": For LiPo safety"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DC-DC Converters"
        }), ": For multiple voltage requirements"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-tools",
      children: "Additional Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mechanical-components",
      children: "Mechanical Components"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Chassis Kits"
        }), ": Pre-designed robot frames"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Wheels"
        }), ": Various types (omnidirectional, standard, tracked)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Gears"
        }), ": For speed/torque reduction"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Mounting Hardware"
        }), ": Brackets, screws, fasteners"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bearings and Bushings"
        }), ": For smooth motion"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "development-tools",
      children: "Development Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prototyping Boards"
        }), ": Breadboards, perfboards"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Jumper Wires"
        }), ": For connections"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multimeter"
        }), ": For electrical measurements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Oscilloscope"
        }), ": For signal analysis (optional)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Soldering Iron"
        }), ": For permanent connections"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "budget-considerations",
      children: "Budget Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "low-budget--200-usd",
      children: "Low Budget (< $200 USD)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Raspberry Pi robot kit"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simple motors and controllers"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Focus on learning fundamental concepts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mid-budget-200---800-usd",
      children: "Mid Budget ($200 - $800 USD)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "TurtleBot 3 or JetBot"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Better sensors (LIDAR, depth camera)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "More sophisticated actuators"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Better computing platform"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "high-budget-800-usd",
      children: "High Budget ($800+ USD)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Advanced robot platforms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Professional-grade sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High-performance computing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multiple or redundant systems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "safety-considerations",
      children: "Safety Considerations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "electrical-safety",
      children: "Electrical Safety"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use appropriate fuses and protection"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper wire gauges for current requirements"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Isolated power supplies when needed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Avoid overloading circuits"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "mechanical-safety",
      children: "Mechanical Safety"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Secure mounting of all components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper torque specifications for fasteners"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Guards for moving parts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Emergency stops when appropriate"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "operational-safety",
      children: "Operational Safety"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Clear operational procedures"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Containment during testing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Proper workspace setup"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Backup plans for system failures"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "where-to-purchase",
      children: "Where to Purchase"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "online-retailers",
      children: "Online Retailers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Amazon (wide selection)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "SparkFun Electronics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Adafruit Industries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Digi-Key Electronics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mouser Electronics"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "specialized-robotics-retailers",
      children: "Specialized Robotics Retailers"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "RobotShop"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Pololu Robotics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Trossen Robotics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Modern Robotics (Lynxmotion)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "local-options",
      children: "Local Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Local electronics stores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Maker spaces with inventory"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "University surplus stores"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Robot competitions and events"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "assembly-and-integration",
      children: "Assembly and Integration"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "required-tools",
      children: "Required Tools"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Screwdrivers (various sizes)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Wire strippers and cutters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Soldering iron and solder"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Multimeter"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Computer for programming and testing"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "assembly-considerations",
      children: "Assembly Considerations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan the layout before assembly"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Consider cable management"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Allow for future modifications"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Document the build process"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "maintenance-and-support",
      children: "Maintenance and Support"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "regular-maintenance",
      children: "Regular Maintenance"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Battery care and replacement"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Cleaning sensors and cameras"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Lubricating moving parts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Updating software"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "troubleshooting",
      children: "Troubleshooting"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Systematic debugging approach"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Log files and diagnostics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Component isolation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Community resources and documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After acquiring your hardware components:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Follow the setup guides in the ", (0,jsx_runtime.jsx)(_components.a, {
          href: "/docs/tools",
          children: "Tools & Software Setup"
        }), " section"]
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Begin with basic ROS2 tutorials to understand the software framework"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate your hardware with the software stack"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Progress through modules 1-4 of this course"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Apply concepts to your physical platform"
      }), "\n"]
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