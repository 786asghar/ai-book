"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[5643],{

/***/ 1856:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_module_2_digital_twin_gazebo_simulation_md_bd4_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-module-2-digital-twin-gazebo-simulation-md-bd4.json
const site_docs_module_2_digital_twin_gazebo_simulation_md_bd4_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"module-2-digital-twin/gazebo-simulation","title":"Module 2 - Gazebo Simulation","description":"Introduction to Gazebo","source":"@site/docs/module-2-digital-twin/gazebo-simulation.md","sourceDirName":"module-2-digital-twin","slug":"/module-2-digital-twin/gazebo-simulation","permalink":"/docs/module-2-digital-twin/gazebo-simulation","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/module-2-digital-twin/gazebo-simulation.md","tags":[],"version":"current","sidebarPosition":3,"frontMatter":{"title":"Module 2 - Gazebo Simulation","sidebar_position":3},"sidebar":"tutorialSidebar","previous":{"title":"Module 1 - ROS2 Foundations","permalink":"/docs/module-1-ros2"},"next":{"title":"Module 3 - NVIDIA Isaac Sim","permalink":"/docs/module-3-ai-brain/isaac-sim"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/module-2-digital-twin/gazebo-simulation.md


const frontMatter = {
	title: 'Module 2 - Gazebo Simulation',
	sidebar_position: 3
};
const contentTitle = 'Module 2 - Gazebo Simulation';

const assets = {

};



const toc = [{
  "value": "Introduction to Gazebo",
  "id": "introduction-to-gazebo",
  "level": 2
}, {
  "value": "Gazebo Classic vs. Gazebo (Ignition)",
  "id": "gazebo-classic-vs-gazebo-ignition",
  "level": 2
}, {
  "value": "Gazebo Classic",
  "id": "gazebo-classic",
  "level": 3
}, {
  "value": "Gazebo (Ignition)",
  "id": "gazebo-ignition",
  "level": 3
}, {
  "value": "Setting Up Your First Simulation",
  "id": "setting-up-your-first-simulation",
  "level": 2
}, {
  "value": "Importing URDF Robots into Simulation",
  "id": "importing-urdf-robots-into-simulation",
  "level": 2
}, {
  "value": "URDF to SDF Conversion",
  "id": "urdf-to-sdf-conversion",
  "level": 3
}, {
  "value": "Example: Creating a Simple Robot Model",
  "id": "example-creating-a-simple-robot-model",
  "level": 3
}, {
  "value": "Creating Environments and Worlds",
  "id": "creating-environments-and-worlds",
  "level": 2
}, {
  "value": "SDF World Files",
  "id": "sdf-world-files",
  "level": 3
}, {
  "value": "Sensors in Gazebo",
  "id": "sensors-in-gazebo",
  "level": 2
}, {
  "value": "Types of Sensors",
  "id": "types-of-sensors",
  "level": 3
}, {
  "value": "Example: Adding a Camera to Your Robot",
  "id": "example-adding-a-camera-to-your-robot",
  "level": 3
}, {
  "value": "Example: Adding a LIDAR Sensor",
  "id": "example-adding-a-lidar-sensor",
  "level": 3
}, {
  "value": "Physics Simulation in Gazebo",
  "id": "physics-simulation-in-gazebo",
  "level": 2
}, {
  "value": "Physics Engine Options",
  "id": "physics-engine-options",
  "level": 3
}, {
  "value": "Physics Parameters",
  "id": "physics-parameters",
  "level": 3
}, {
  "value": "Kinematics in Simulation",
  "id": "kinematics-in-simulation",
  "level": 2
}, {
  "value": "Forward Kinematics",
  "id": "forward-kinematics",
  "level": 3
}, {
  "value": "Inverse Kinematics",
  "id": "inverse-kinematics",
  "level": 3
}, {
  "value": "Hands-on Labs",
  "id": "hands-on-labs",
  "level": 2
}, {
  "value": "Lab 1: Spawn Your Robot",
  "id": "lab-1-spawn-your-robot",
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
  "value": "Lab 2: Add Obstacles to Your Environment",
  "id": "lab-2-add-obstacles-to-your-environment",
  "level": 3
}, {
  "value": "Steps:",
  "id": "steps-1",
  "level": 4
}, {
  "value": "Lab 3: Test Autonomous Navigation",
  "id": "lab-3-test-autonomous-navigation",
  "level": 3
}, {
  "value": "Steps:",
  "id": "steps-2",
  "level": 4
}, {
  "value": "Custom Plugins in Gazebo",
  "id": "custom-plugins-in-gazebo",
  "level": 2
}, {
  "value": "Types of Plugins",
  "id": "types-of-plugins",
  "level": 3
}, {
  "value": "Example: Simple Model Plugin",
  "id": "example-simple-model-plugin",
  "level": 3
}, {
  "value": "Best Practices for Gazebo Simulation",
  "id": "best-practices-for-gazebo-simulation",
  "level": 2
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
        id: "module-2---gazebo-simulation",
        children: "Module 2 - Gazebo Simulation"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "introduction-to-gazebo",
      children: "Introduction to Gazebo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gazebo is a powerful open-source robotics simulator that allows you to create, test, and validate robotic systems in a realistic 3D environment. It provides:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "High-fidelity physics simulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Advanced graphics rendering"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration with ROS/ROS2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A rich library of sensors"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A repository of models and environments"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gazebo is an essential tool for robotics development, as it allows you to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test algorithms without risk of damaging real robots"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Experiment with different scenarios and environments"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate control strategies before deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate synthetic data for training AI models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproduce experiments consistently"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gazebo-classic-vs-gazebo-ignition",
      children: "Gazebo Classic vs. Gazebo (Ignition)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "There are two main versions of Gazebo that are important to understand:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gazebo-classic",
      children: "Gazebo Classic"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The traditional version of Gazebo, widely used in the robotics community"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Uses OGRE for rendering and ODE/PhysX for physics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Well-documented with a large user base"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Tightly integrated with ROS"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Still maintained but slowly being phased out in favor of newer versions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gazebo-ignition",
      children: "Gazebo (Ignition)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The newer generation of Gazebo, designed as a modular system"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Based on Ignition Robotics libraries"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Offers improved performance and modularity"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Better support for distributed simulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Designed with ROS2 integration in mind"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "More extensible plugin architecture"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For this course, we'll focus on Gazebo Classic due to its extensive documentation and widespread use, but the concepts translate well to the newer versions."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "setting-up-your-first-simulation",
      children: "Setting Up Your First Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before diving into complex simulations, let's create a basic simulation environment:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Launch Gazebo:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "gazebo\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Explore the GUI:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The main 3D view shows the world"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The top toolbar contains simulation controls"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The left panel has a model/database browser"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "The right panel shows world properties and entities"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Basic Controls:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Click and drag: Orbit camera"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Scroll wheel: Zoom in/out"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Right-click and drag: Pan camera"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Shift + Left-click and drag: Move objects"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "importing-urdf-robots-into-simulation",
      children: "Importing URDF Robots into Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "One of the most important aspects of Gazebo is the ability to simulate your own custom robots. This is typically done by importing URDF (Unified Robot Description Format) models."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "urdf-to-sdf-conversion",
      children: "URDF to SDF Conversion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["Gazebo uses SDF (Simulation Description Format) internally, so URDF models need to be converted. The good news is that Gazebo can handle this conversion automatically using the ", (0,jsx_runtime.jsx)(_components.code, {
        children: "libgazebo_ros_kinematics"
      }), " plugin."]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-creating-a-simple-robot-model",
      children: "Example: Creating a Simple Robot Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "First, let's create a simple robot URDF file:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\"?>\n<robot name=\"simple_mobile_robot\" xmlns:xacro=\"http://www.ros.org/wiki/xacro\">\n\n  <!-- Materials -->\n  <material name=\"blue\">\n    <color rgba=\"0 0 0.8 1\"/>\n  </material>\n  <material name=\"black\">\n    <color rgba=\"0 0 0 1\"/>\n  </material>\n  <material name=\"white\">\n    <color rgba=\"1 1 1 1\"/>\n  </material>\n\n  <!-- Base Link -->\n  <link name=\"base_link\">\n    <visual>\n      <geometry>\n        <box size=\"0.5 0.5 0.2\"/>\n      </geometry>\n      <material name=\"blue\"/>\n    </visual>\n    <collision>\n      <geometry>\n        <box size=\"0.5 0.5 0.2\"/>\n      </geometry>\n    </collision>\n    <inertial>\n      <mass value=\"10\"/>\n      <inertia ixx=\"0.42\" ixy=\"0\" ixz=\"0\" iyy=\"0.42\" iyz=\"0\" izz=\"0.83\"/>\n    </inertial>\n  </link>\n\n  <!-- Wheels -->\n  <link name=\"front_wheel\">\n    <visual>\n      <geometry>\n        <cylinder radius=\"0.1\" length=\"0.05\"/>\n      </geometry>\n      <material name=\"black\"/>\n    </visual>\n    <collision>\n      <geometry>\n        <cylinder radius=\"0.1\" length=\"0.05\"/>\n      </geometry>\n    </collision>\n    <inertial>\n      <mass value=\"1\"/>\n      <inertia ixx=\"0.001\" ixy=\"0\" ixz=\"0\" iyy=\"0.001\" iyz=\"0\" izz=\"0.002\"/>\n    </inertial>\n  </link>\n\n  <link name=\"back_wheel\">\n    <visual>\n      <geometry>\n        <cylinder radius=\"0.1\" length=\"0.05\"/>\n      </geometry>\n      <material name=\"black\"/>\n    </visual>\n    <collision>\n      <geometry>\n        <cylinder radius=\"0.1\" length=\"0.05\"/>\n      </geometry>\n    </collision>\n    <inertial>\n      <mass value=\"1\"/>\n      <inertia ixx=\"0.001\" ixy=\"0\" ixz=\"0\" iyy=\"0.001\" iyz=\"0\" izz=\"0.002\"/>\n    </inertial>\n  </link>\n\n  <!-- Joints -->\n  <joint name=\"front_wheel_joint\" type=\"continuous\">\n    <parent link=\"base_link\"/>\n    <child link=\"front_wheel\"/>\n    <origin xyz=\"0.2 0 -0.1\" rpy=\"1.5707 0 0\"/>\n    <axis xyz=\"0 1 0\"/>\n  </joint>\n\n  <joint name=\"back_wheel_joint\" type=\"continuous\">\n    <parent link=\"base_link\"/>\n    <child link=\"back_wheel\"/>\n    <origin xyz=\"-0.2 0 -0.1\" rpy=\"1.5707 0 0\"/>\n    <axis xyz=\"0 1 0\"/>\n  </joint>\n\n  <!-- Gazebo plugin for ROS control -->\n  <gazebo>\n    <plugin name=\"diff_drive\" filename=\"libgazebo_ros_diff_drive.so\">\n      <commandTopic>/cmd_vel</commandTopic>\n      <odometryTopic>/odom</odometryTopic>\n      <odometryFrame>odom</odometryFrame>\n      <robotBaseFrame>base_link</robotBaseFrame>\n      <publishOdom>true</publishOdom>\n      <publishWheelTF>false</publishWheelTF>\n      <publishWheelJointState>true</publishWheelJointState>\n      <legacyMode>false</legacyMode>\n      <updateRate>30</updateRate>\n      <leftJoint>front_wheel_joint</leftJoint>\n      <rightJoint>back_wheel_joint</rightJoint>\n      <wheelSeparation>0.5</wheelSeparation>\n      <wheelDiameter>0.2</wheelDiameter>\n    </plugin>\n  </gazebo>\n\n</robot>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "To load this robot into Gazebo, you would typically use a launch file that spawns the robot model at startup."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "creating-environments-and-worlds",
      children: "Creating Environments and Worlds"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Creating custom environments is a key capability of Gazebo. You can define your own worlds with specific lighting, terrain, and objects."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "sdf-world-files",
      children: "SDF World Files"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "World files in Gazebo are written in SDF format and define the complete simulation environment:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" ?>\n<sdf version=\"1.7\">\n  <world name=\"simple_world\">\n    <!-- Include a model from the database -->\n    <include>\n      <uri>model://ground_plane</uri>\n    </include>\n\n    <include>\n      <uri>model://sun</uri>\n    </include>\n\n    <!-- Define a custom model -->\n    <model name=\"wall\">\n      <pose>-1 0 0.5 0 0 0</pose>\n      <link name=\"wall_link\">\n        <pose>0 0 0.5 0 0 0</pose>\n        <collision name=\"wall_collision\">\n          <geometry>\n            <box>\n              <size>0.1 2 1</size>\n            </box>\n          </geometry>\n        </collision>\n        <visual name=\"wall_visual\">\n          <geometry>\n            <box>\n              <size>0.1 2 1</size>\n            </box>\n          </geometry>\n          <material>\n            <ambient>0.8 0.8 0.8 1</ambient>\n            <diffuse>0.8 0.8 0.8 1</diffuse>\n            <specular>0.8 0.8 0.8 1</specular>\n          </material>\n        </visual>\n      </link>\n    </model>\n\n    <!-- Lighting -->\n    <light name='sun' type='directional'>\n      <cast_shadows>true</cast_shadows>\n      <pose>0 0 10 0 0 0</pose>\n      <diffuse>0.8 0.8 0.8 1</diffuse>\n      <specular>0.2 0.2 0.2 1</specular>\n      <attenuation>\n        <range>1000</range>\n        <constant>0.9</constant>\n        <linear>0.01</linear>\n        <quadratic>0.001</quadratic>\n      </attenuation>\n      <direction>-0.0 0.0 -1</direction>\n    </light>\n  </world>\n</sdf>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "sensors-in-gazebo",
      children: "Sensors in Gazebo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gazebo provides a wide range of sensor types that emulate real-world sensors:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-sensors",
      children: "Types of Sensors"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Camera sensors"
        }), ": RGB, depth, stereo cameras"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "LIDAR sensors"
        }), ": 2D and 3D laser scanners"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "IMU sensors"
        }), ": Inertial measurement units"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Force/Torque sensors"
        }), ": For measuring forces at joints"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GPS sensors"
        }), ": Global positioning system"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Contact sensors"
        }), ": Detect collisions between objects"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-adding-a-camera-to-your-robot",
      children: "Example: Adding a Camera to Your Robot"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<gazebo reference=\"camera_link\">\n  <sensor type=\"camera\" name=\"camera1\">\n    <update_rate>30.0</update_rate>\n    <camera name=\"head\">\n      <horizontal_fov>1.3962634</horizontal_fov>\n      <image>\n        <width>800</width>\n        <height>800</height>\n        <format>R8G8B8</format>\n      </image>\n      <clip>\n        <near>0.02</near>\n        <far>300</far>\n      </clip>\n    </camera>\n    <plugin name=\"camera_controller\" filename=\"libgazebo_ros_camera.so\">\n      <alwaysOn>true</alwaysOn>\n      <updateRate>0.0</updateRate>\n      <cameraName>simple_cam</cameraName>\n      <imageTopicName>image_raw</imageTopicName>\n      <cameraInfoTopicName>camera_info</cameraInfoTopicName>\n      <frameName>camera_optical_frame</frameName>\n      <hackBaseline>0.07</hackBaseline>\n      <distortionK1>0.0</distortionK1>\n      <distortionK2>0.0</distortionK2>\n      <distortionK3>0.0</distortionK3>\n      <distortionT1>0.0</distortionT1>\n      <distortionT2>0.0</distortionT2>\n    </plugin>\n  </sensor>\n</gazebo>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-adding-a-lidar-sensor",
      children: "Example: Adding a LIDAR Sensor"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<gazebo reference=\"lidar_link\">\n  <sensor type=\"ray\" name=\"lidar_sensor\">\n    <pose>0 0 0 0 0 0</pose>\n    <visualize>true</visualize>\n    <update_rate>10</update_rate>\n    <ray>\n      <scan>\n        <horizontal>\n          <samples>720</samples>\n          <resolution>1</resolution>\n          <min_angle>-1.570796</min_angle>\n          <max_angle>1.570796</max_angle>\n        </horizontal>\n      </scan>\n      <range>\n        <min>0.10</min>\n        <max>30.0</max>\n        <resolution>0.01</resolution>\n      </range>\n    </ray>\n    <plugin name=\"lidar_plugin\" filename=\"libgazebo_ros_laser.so\">\n      <topicName>/scan</topicName>\n      <frameName>lidar_link</frameName>\n    </plugin>\n  </sensor>\n</gazebo>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "physics-simulation-in-gazebo",
      children: "Physics Simulation in Gazebo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Understanding Gazebo's physics engine is crucial for creating realistic simulations:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "physics-engine-options",
      children: "Physics Engine Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "ODE (Open Dynamics Engine)"
        }), ": Default, good balance of speed and accuracy"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Bullet"
        }), ": Good for articulated bodies"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "SimBody"
        }), ": From NASA, good for biomechanics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "DART"
        }), ": Dynamic Animation and Robotics Toolkit"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "physics-parameters",
      children: "Physics Parameters"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "The physics engine configuration affects simulation realism and performance:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<physics type=\"ode\">\n  <max_step_size>0.001</max_step_size>\n  <real_time_factor>1</real_time_factor>\n  <real_time_update_rate>1000</real_time_update_rate>\n  <gravity>0 0 -9.8</gravity>\n</physics>\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "kinematics-in-simulation",
      children: "Kinematics in Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In addition to dynamics, Gazebo handles kinematic relationships between robot parts:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "forward-kinematics",
      children: "Forward Kinematics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Computes the position and orientation of the end-effector based on joint angles"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implemented using plugins or custom controllers"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "inverse-kinematics",
      children: "Inverse Kinematics"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Determines the joint angles needed to achieve a desired position"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Often handled by external packages like MoveIt!"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "hands-on-labs",
      children: "Hands-on Labs"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-1-spawn-your-robot",
      children: "Lab 1: Spawn Your Robot"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this lab, you'll learn how to spawn your custom robot model in Gazebo."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ROS2 Humble"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Gazebo Classic installed"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of URDF from Module 1"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "steps",
      children: "Steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create a ROS2 package for your robot:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "cd ~/ros2_ws/src\nros2 pkg create --build-type ament_python gazebo_robot_pkg\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create directories for your robot model:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "mkdir -p ~/ros2_ws/src/gazebo_robot_pkg/models/simple_robot\ncd ~/ros2_ws/src/gazebo_robot_pkg/models/simple_robot\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create the model.config file:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "touch model.config\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add the following to model.config:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-xml",
            children: "<?xml version=\"1.0\"?>\n<model>\n  <name>simple_robot</name>\n  <version>1.0</version>\n  <sdf version=\"1.6\">model.sdf</sdf>\n  <author>\n    <name>Your Name</name>\n    <email>your.email@example.com</email>\n  </author>\n  <description>A simple mobile robot for Gazebo simulation.</description>\n</model>\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create the model.sdf file:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "touch model.sdf\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add the following to model.sdf:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-xml",
            children: "<?xml version=\"1.0\" ?>\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)("sdf", {
      version: "1.6",
      children: (0,jsx_runtime.jsxs)("model", {
        name: "simple_robot",
        children: [(0,jsx_runtime.jsxs)("link", {
          name: "chassis",
          children: [(0,jsx_runtime.jsxs)("inertial", {
            children: [(0,jsx_runtime.jsx)("mass", {
              children: "5.0"
            }), (0,jsx_runtime.jsxs)("inertia", {
              children: [(0,jsx_runtime.jsx)("ixx", {
                children: "0.1"
              }), (0,jsx_runtime.jsx)("ixy", {
                children: "0.0"
              }), (0,jsx_runtime.jsx)("ixz", {
                children: "0.0"
              }), (0,jsx_runtime.jsx)("iyy", {
                children: "0.1"
              }), (0,jsx_runtime.jsx)("iyz", {
                children: "0.0"
              }), (0,jsx_runtime.jsx)("izz", {
                children: "0.1"
              })]
            })]
          }), (0,jsx_runtime.jsx)("collision", {
            name: "collision",
            children: (0,jsx_runtime.jsx)("geometry", {
              children: (0,jsx_runtime.jsx)("box", {
                children: (0,jsx_runtime.jsx)("size", {
                  children: "0.5 0.3 0.1"
                })
              })
            })
          }), (0,jsx_runtime.jsxs)("visual", {
            name: "visual",
            children: [(0,jsx_runtime.jsx)("geometry", {
              children: (0,jsx_runtime.jsx)("box", {
                children: (0,jsx_runtime.jsx)("size", {
                  children: "0.5 0.3 0.1"
                })
              })
            }), (0,jsx_runtime.jsxs)("material", {
              children: [(0,jsx_runtime.jsx)("ambient", {
                children: "0.2 0.2 1.0 1.0"
              }), (0,jsx_runtime.jsx)("diffuse", {
                children: "0.2 0.2 1.0 1.0"
              }), (0,jsx_runtime.jsx)("specular", {
                children: "0.2 0.2 1.0 1.0"
              })]
            })]
          })]
        }), (0,jsx_runtime.jsxs)("plugin", {
          name: "diff_drive",
          filename: "libgazebo_ros_diff_drive.so",
          children: [(0,jsx_runtime.jsx)("left_joint", {
            children: "left_wheel_joint"
          }), (0,jsx_runtime.jsx)("right_joint", {
            children: "right_wheel_joint"
          }), (0,jsx_runtime.jsx)("wheel_separation", {
            children: "0.3"
          }), (0,jsx_runtime.jsx)("wheel_diameter", {
            children: "0.15"
          }), (0,jsx_runtime.jsx)("command_topic", {
            children: "/cmd_vel"
          }), (0,jsx_runtime.jsx)("odometry_topic", {
            children: "/odom"
          }), (0,jsx_runtime.jsx)("odometry_frame", {
            children: "odom"
          }), (0,jsx_runtime.jsx)("robot_base_frame", {
            children: "chassis"
          }), (0,jsx_runtime.jsx)("update_rate", {
            children: "30"
          })]
        })]
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "\n7. **Set up the GAZEBO_MODEL_PATH environment variable:**\n```bash\necho 'export GAZEBO_MODEL_PATH=$GAZEBO_MODEL_PATH:~/ros2_ws/src/gazebo_robot_pkg/models' >> ~/.bashrc\nsource ~/.bashrc\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "8",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Launch Gazebo and insert your robot:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "gazebo\n"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.p, {
          children: "In Gazebo, use the Insert tab to find and place your \"simple_robot\" model."
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-2-add-obstacles-to-your-environment",
      children: "Lab 2: Add Obstacles to Your Environment"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this lab, you'll learn to create and customize environments with obstacles to challenge your robot."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "steps-1",
      children: "Steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create a new world file:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "mkdir -p ~/ros2_ws/src/gazebo_robot_pkg/worlds\ntouch ~/ros2_ws/src/gazebo_robot_pkg/worlds/simple_obstacle_course.world\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add the following content to create a room with obstacles:"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" ?>\n<sdf version=\"1.7\">\n  <world name=\"simple_obstacle_course\">\n    <!-- Ground plane -->\n    <include>\n      <uri>model://ground_plane</uri>\n    </include>\n\n    <!-- Sun light source -->\n    <include>\n      <uri>model://sun</uri>\n    </include>\n\n    <!-- Walls forming a maze-like structure -->\n    <model name='wall1'>\n      <pose>-1 2 0 0 0 0</pose>\n      <link name='wall1_link'>\n        <collision name='wall1_collision'>\n          <geometry>\n            <box><size>2 0.1 1</size></box>\n          </geometry>\n        </collision>\n        <visual name='wall1_visual'>\n          <geometry>\n            <box><size>2 0.1 1</size></box>\n          </geometry>\n          <material>\n            <ambient>0.5 0.5 0.5 1</ambient>\n            <diffuse>0.8 0.8 0.8 1</diffuse>\n          </material>\n        </visual>\n      </link>\n    </model>\n\n    <model name='wall2'>\n      <pose>1 0 0 0 0 0</pose>\n      <link name='wall2_link'>\n        <collision name='wall2_collision'>\n          <geometry>\n            <box><size>0.1 2 1</size></box>\n          </geometry>\n        </collision>\n        <visual name='wall2_visual'>\n          <geometry>\n            <box><size>0.1 2 1</size></box>\n          </geometry>\n          <material>\n            <ambient>0.5 0.5 0.5 1</ambient>\n            <diffuse>0.8 0.8 0.8 1</diffuse>\n          </material>\n        </visual>\n      </link>\n    </model>\n\n    <model name='obstacle1'>\n      <pose>0 -1 0 0 0 0</pose>\n      <link name='obstacle1_link'>\n        <collision name='obstacle1_collision'>\n          <geometry>\n            <sphere><radius>0.3</radius></sphere>\n          </geometry>\n        </collision>\n        <visual name='obstacle1_visual'>\n          <geometry>\n            <sphere><radius>0.3</radius></sphere>\n          </geometry>\n          <material>\n            <ambient>1 0 0 1</ambient>\n            <diffuse>1 0 0 1</diffuse>\n          </material>\n        </visual>\n      </link>\n    </model>\n\n    <!-- Add your robot -->\n    <include>\n      <name>simple_robot</name>\n      <pose>0 0 0.1 0 0 0</pose>\n      <uri>model://simple_robot</uri>\n    </include>\n  </world>\n</sdf>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      start: "3",
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Launch Gazebo with your custom world:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "gazebo ~/ros2_ws/src/gazebo_robot_pkg/worlds/simple_obstacle_course.world\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Alternative: Create a launch file to automate the process:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "mkdir -p ~/ros2_ws/src/gazebo_robot_pkg/launch\ntouch ~/ros2_ws/src/gazebo_robot_pkg/launch/spawn_robot.launch.py\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add the following content to the launch file:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "import os\nfrom launch import LaunchDescription\nfrom launch.actions import ExecuteProcess\nfrom launch.actions import IncludeLaunchDescription\nfrom launch.launch_description_sources import PythonLaunchDescriptionSource\nfrom launch.substitutions import LaunchConfiguration\nfrom ament_index_python.packages import get_package_share_directory\n\n\ndef generate_launch_description():\n    package_dir = get_package_share_directory('gazebo_robot_pkg')\n\n    # Launch Gazebo with custom world\n    gazebo = ExecuteProcess(\n        cmd=[\n            'gazebo',\n            '--verbose',\n            '-s', 'libgazebo_ros_factory.so',\n            '-s', 'libgazebo_ros_init.so',\n            os.path.join(package_dir, 'worlds', 'simple_obstacle_course.world')\n        ],\n        output='screen'\n    )\n\n    return LaunchDescription([\n        gazebo\n    ])\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Build and run:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "cd ~/ros2_ws\ncolcon build --packages-select gazebo_robot_pkg\nsource install/setup.bash\nros2 launch gazebo_robot_pkg spawn_robot.launch.py\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "lab-3-test-autonomous-navigation",
      children: "Lab 3: Test Autonomous Navigation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this lab, you'll implement a simple navigation algorithm to move your robot around the obstacle course."
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "steps-2",
      children: "Steps:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Install navigation packages:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "sudo apt update\nsudo apt install ros-humble-navigation2 ros-humble-nav2-bringup\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create a navigation script:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "mkdir -p ~/ros2_ws/src/gazebo_robot_pkg/gazebo_robot_pkg\ntouch ~/ros2_ws/src/gazebo_robot_pkg/gazebo_robot_pkg/navigation_test.py\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add the following content to navigation_test.py:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "#!/usr/bin/env python3\n\nimport rclpy\nfrom rclpy.node import Node\nfrom geometry_msgs.msg import Twist\nfrom sensor_msgs.msg import LaserScan\nimport math\n\n\nclass SimpleNavigation(Node):\n    def __init__(self):\n        super().__init__('simple_navigation')\n\n        # Publisher for velocity commands\n        self.cmd_vel_pub = self.create_publisher(Twist, '/cmd_vel', 10)\n\n        # Subscriber for laser scan data\n        self.scan_sub = self.create_subscription(\n            LaserScan,\n            '/scan',\n            self.scan_callback,\n            10\n        )\n\n        # Timer for control loop\n        self.timer = self.create_timer(0.1, self.control_loop)\n\n        # Robot state\n        self.obstacle_distance = float('inf')\n        self.obstacle_angle = 0\n        self.state = \"FORWARD\"  # FORWARD, TURN_LEFT, TURN_RIGHT\n        self.state_timer = 0\n\n    def scan_callback(self, msg):\n        # Find the minimum distance in the front arc (90 degrees)\n        front_range_start = len(msg.ranges) // 2 - 45\n        front_range_end = len(msg.ranges) // 2 + 45\n\n        min_distance = float('inf')\n        min_index = 0\n\n        for i in range(front_range_start, front_range_end):\n            if i >= 0 and i < len(msg.ranges):\n                if not math.isnan(msg.ranges[i]) and msg.ranges[i] < min_distance:\n                    min_distance = msg.ranges[i]\n                    min_index = i\n\n        self.obstacle_distance = min_distance\n        self.obstacle_angle = msg.angle_min + min_index * msg.angle_increment\n\n    def control_loop(self):\n        twist = Twist()\n\n        # Simple obstacle avoidance\n        if self.obstacle_distance < 1.0:  # Obstacle within 1 meter\n            if self.state == \"FORWARD\":\n                self.state = \"TURN_LEFT\"\n                self.state_timer = 50  # Turn for 5 seconds worth of callbacks\n\n            if self.obstacle_angle > 0:  # Obstacle on the right, turn left\n                twist.linear.x = 0.0\n                twist.angular.z = 0.5\n            else:  # Obstacle on the left, turn right\n                twist.linear.x = 0.0\n                twist.angular.z = -0.5\n        else:\n            # Move forward if no obstacles ahead\n            self.state = \"FORWARD\"\n            twist.linear.x = 0.5\n            twist.angular.z = 0.0\n\n        # Decrement timer if in turning state\n        if self.state_timer > 0:\n            self.state_timer -= 1\n        elif self.state != \"FORWARD\":\n            self.state = \"FORWARD\"\n\n        self.cmd_vel_pub.publish(twist)\n\n\ndef main(args=None):\n    rclpy.init(args=args)\n    nav_node = SimpleNavigation()\n\n    try:\n        rclpy.spin(nav_node)\n    except KeyboardInterrupt:\n        pass\n    finally:\n        nav_node.destroy_node()\n        rclpy.shutdown()\n\n\nif __name__ == '__main__':\n    main()\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Update setup.py to add the navigation executable:"
          }), "\nAdd the following to the entry_points section in setup.py:"]
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-python",
            children: "entry_points={\n    'console_scripts': [\n        'navigation_test = gazebo_robot_pkg.navigation_test:main',\n    ],\n},\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Build and run the navigation test:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "cd ~/ros2_ws\ncolcon build --packages-select gazebo_robot_pkg\nsource install/setup.bash\n\n# Launch Gazebo with the world\nros2 launch gazebo_robot_pkg spawn_robot.launch.py\n\n# In another terminal, run the navigation script\nros2 run gazebo_robot_pkg navigation_test\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "custom-plugins-in-gazebo",
      children: "Custom Plugins in Gazebo"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Advanced users can create custom plugins to add specific functionality to Gazebo:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "types-of-plugins",
      children: "Types of Plugins"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model plugins"
        }), ": Attach to specific models"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "World plugins"
        }), ": Operate at the world level"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sensor plugins"
        }), ": Process sensor data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System plugins"
        }), ": Low-level system operations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "GUI plugins"
        }), ": Extend the graphical interface"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "example-simple-model-plugin",
      children: "Example: Simple Model Plugin"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Here's a simple C++ plugin that makes a model respond to a ROS service call:"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: (0,jsx_runtime.jsx)(_components.strong, {
        children: "simple_model_plugin.cpp:"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-cpp",
        children: "#include <gazebo/common/Plugin.hh>\n#include <gazebo/physics/physics.hh>\n#include <rclcpp/rclcpp.hpp>\n#include <std_srvs/srv/trigger.hpp>\n\nnamespace gazebo\n{\n  class SimpleModelPlugin : public ModelPlugin\n  {\n    public: void Load(physics::ModelPtr _model, sdf::ElementPtr _sdf)\n    {\n      this->model = _model;\n\n      // Initialize ROS\n      if (!rclcpp::ok()) {\n        rclcpp::init(0, nullptr);\n        this->rosNode = rclcpp::Node::make_shared(\"simple_model_plugin\");\n      }\n\n      // Create service\n      this->service = this->rosNode->create_service<std_srvs::srv::Trigger>(\n        \"~/move_model\",\n        [this](const std::shared_ptr<std_srvs::srv::Trigger::Request> request,\n               std::shared_ptr<std_srvs::srv::Trigger::Response> response) {\n          this->MoveModel();\n          response->success = true;\n          response->message = \"Model moved!\";\n        });\n\n      // Start ROS spinner thread\n      this->rosSpinnerThread = std::thread([this]() {\n        rclcpp::spin(this->rosNode);\n      });\n    }\n\n    private: void MoveModel()\n    {\n      math::Pose pose = this->model->GetWorldPose();\n      pose.pos.x() += 1.0;  // Move 1m in x direction\n      this->model->SetWorldPose(pose);\n    }\n\n    private: physics::ModelPtr model;\n    private: rclcpp::Node::SharedPtr rosNode;\n    private: rclcpp::Service<std_srvs::srv::Trigger>::SharedPtr service;\n    private: std::thread rosSpinnerThread;\n  };\n\n  GZ_REGISTER_MODEL_PLUGIN(SimpleModelPlugin)\n}\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "best-practices-for-gazebo-simulation",
      children: "Best Practices for Gazebo Simulation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Performance Optimization:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use appropriate update rates for sensors"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Simplify collision geometries when possible"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Adjust physics step sizes based on your needs"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Realistic Simulation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Accurate inertial properties in URDF"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Proper friction coefficients"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Realistic sensor noise parameters"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Testing and Validation:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compare simulation results with theoretical models"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use simpler models to validate behavior first"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Gradually add complexity"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Debugging:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Use Gazebo's visualization tools"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Monitor ROS topics during simulation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Log important values for analysis"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "summary",
      children: "Summary"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In this module, you've learned about Gazebo simulation, including:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "The differences between Gazebo Classic and Ignition"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "How to import URDF robots into simulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Creating custom environments and worlds"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Working with various sensor types"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding physics simulation in Gazebo"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Developing custom plugins for enhanced functionality"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "In the hands-on labs, you created a simple robot model, set up custom environments with obstacles, and implemented navigation algorithms to test your robot's capabilities. These skills are essential for developing and testing complex robotic systems before deploying them in the real world."
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