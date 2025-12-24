"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[821],{

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


/***/ }),

/***/ 9992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_roadmap_md_0df_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-roadmap-md-0df.json
const site_docs_roadmap_md_0df_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"roadmap","title":"Weekly Breakdown (Roadmap)","description":"Overview","source":"@site/docs/roadmap.md","sourceDirName":".","slug":"/roadmap","permalink":"/docs/roadmap","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/roadmap.md","tags":[],"version":"current","sidebarPosition":8,"frontMatter":{"title":"Weekly Breakdown (Roadmap)","sidebar_position":8},"sidebar":"tutorialSidebar","previous":{"title":"Tools & Software Setup","permalink":"/docs/tools"},"next":{"title":"Capstone Project","permalink":"/docs/capstone"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/roadmap.md


const frontMatter = {
	title: 'Weekly Breakdown (Roadmap)',
	sidebar_position: 8
};
const contentTitle = 'Weekly Breakdown (Roadmap)';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "Week 1: ROS2 Foundations",
  "id": "week-1-ros2-foundations",
  "level": 2
}, {
  "value": "Learning Objectives",
  "id": "learning-objectives",
  "level": 3
}, {
  "value": "Daily Breakdown",
  "id": "daily-breakdown",
  "level": 3
}, {
  "value": "Week 1 Deliverables",
  "id": "week-1-deliverables",
  "level": 3
}, {
  "value": "Week 2: Gazebo Simulation",
  "id": "week-2-gazebo-simulation",
  "level": 2
}, {
  "value": "Learning Objectives",
  "id": "learning-objectives-1",
  "level": 3
}, {
  "value": "Daily Breakdown",
  "id": "daily-breakdown-1",
  "level": 3
}, {
  "value": "Week 2 Deliverables",
  "id": "week-2-deliverables",
  "level": 3
}, {
  "value": "Week 3: NVIDIA Isaac Sim",
  "id": "week-3-nvidia-isaac-sim",
  "level": 2
}, {
  "value": "Learning Objectives",
  "id": "learning-objectives-2",
  "level": 3
}, {
  "value": "Daily Breakdown",
  "id": "daily-breakdown-2",
  "level": 3
}, {
  "value": "Week 3 Deliverables",
  "id": "week-3-deliverables",
  "level": 3
}, {
  "value": "Week 4: Vision-Language-Action Agents",
  "id": "week-4-vision-language-action-agents",
  "level": 2
}, {
  "value": "Learning Objectives",
  "id": "learning-objectives-3",
  "level": 3
}, {
  "value": "Daily Breakdown",
  "id": "daily-breakdown-3",
  "level": 3
}, {
  "value": "Week 4 Deliverables",
  "id": "week-4-deliverables",
  "level": 3
}, {
  "value": "Week 5: Capstone Project Planning and Initial Implementation",
  "id": "week-5-capstone-project-planning-and-initial-implementation",
  "level": 2
}, {
  "value": "Learning Objectives",
  "id": "learning-objectives-4",
  "level": 3
}, {
  "value": "Daily Breakdown",
  "id": "daily-breakdown-4",
  "level": 3
}, {
  "value": "Week 5 Deliverables",
  "id": "week-5-deliverables",
  "level": 3
}, {
  "value": "Week 6: Capstone Project Completion and Deployment",
  "id": "week-6-capstone-project-completion-and-deployment",
  "level": 2
}, {
  "value": "Learning Objectives",
  "id": "learning-objectives-5",
  "level": 3
}, {
  "value": "Daily Breakdown",
  "id": "daily-breakdown-5",
  "level": 3
}, {
  "value": "Week 6 Deliverables",
  "id": "week-6-deliverables",
  "level": 3
}, {
  "value": "Recommended Time Investment",
  "id": "recommended-time-investment",
  "level": 2
}, {
  "value": "Learning Prerequisites by Week",
  "id": "learning-prerequisites-by-week",
  "level": 2
}, {
  "value": "Week 1: ROS2 Foundations",
  "id": "week-1-ros2-foundations-1",
  "level": 3
}, {
  "value": "Week 2: Gazebo Simulation",
  "id": "week-2-gazebo-simulation-1",
  "level": 3
}, {
  "value": "Week 3: NVIDIA Isaac Sim",
  "id": "week-3-nvidia-isaac-sim-1",
  "level": 3
}, {
  "value": "Week 4: Vision-Language-Action Agents",
  "id": "week-4-vision-language-action-agents-1",
  "level": 3
}, {
  "value": "Weeks 5-6: Capstone Project",
  "id": "weeks-5-6-capstone-project",
  "level": 3
}, {
  "value": "Flexibility and Adaptation",
  "id": "flexibility-and-adaptation",
  "level": 2
}, {
  "value": "Accelerated Track",
  "id": "accelerated-track",
  "level": 3
}, {
  "value": "Extended Track",
  "id": "extended-track",
  "level": 3
}, {
  "value": "Assessment and Progress Tracking",
  "id": "assessment-and-progress-tracking",
  "level": 2
}, {
  "value": "Weekly Checkpoints",
  "id": "weekly-checkpoints",
  "level": 3
}, {
  "value": "Project Milestones",
  "id": "project-milestones",
  "level": 3
}, {
  "value": "Resources for Each Week",
  "id": "resources-for-each-week",
  "level": 2
}, {
  "value": "Week 1 - ROS2 Foundations",
  "id": "week-1---ros2-foundations",
  "level": 3
}, {
  "value": "Week 2 - Gazebo Simulation",
  "id": "week-2---gazebo-simulation",
  "level": 3
}, {
  "value": "Week 3 - NVIDIA Isaac Sim",
  "id": "week-3---nvidia-isaac-sim",
  "level": 3
}, {
  "value": "Week 4 - Vision-Language-Action Agents",
  "id": "week-4---vision-language-action-agents",
  "level": 3
}, {
  "value": "Weeks 5-6 - Capstone Project",
  "id": "weeks-5-6---capstone-project",
  "level": 3
}, {
  "value": "Next Steps After Completion",
  "id": "next-steps-after-completion",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    a: "a",
    h1: "h1",
    h2: "h2",
    h3: "h3",
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
        id: "weekly-breakdown-roadmap",
        children: "Weekly Breakdown (Roadmap)"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This roadmap outlines a structured 6-week journey through the Physical AI & Robotics Bootcamp. Each week builds on the previous one, gradually introducing more complex concepts and hands-on projects. The roadmap is designed to take you from a beginner to an intermediate level in physical AI and robotics."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "week-1-ros2-foundations",
      children: "Week 1: ROS2 Foundations"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "learning-objectives",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the fundamentals of ROS2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learn about nodes, topics, services, and actions"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Master the publisher-subscriber pattern"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Get familiar with ROS2 tools and debugging"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "daily-breakdown",
      children: "Daily Breakdown"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day 1-2"
          }), ": ROS2 Introduction and Installation"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ROS2 architecture overview"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Installation and environment setup"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Creating your first ROS2 workspace"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day 3-4"
          }), ": Nodes, Topics, and Services"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Creating nodes in Python and C++"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Publisher-subscriber pattern"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Service-server implementation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hands-on: Build your first ROS2 package"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day 5-7"
          }), ": Advanced ROS2 Concepts"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "TF transformations"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "URDF robot models"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Parameters and launch files"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hands-on: Publish movement commands and control a mobile robot"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "week-1-deliverables",
      children: "Week 1 Deliverables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A functional ROS2 workspace with custom publisher and subscriber"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A mobile robot controller responding to commands"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of core ROS2 concepts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "week-2-gazebo-simulation",
      children: "Week 2: Gazebo Simulation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "learning-objectives-1",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Set up and navigate Gazebo simulation environment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Create and import custom robot models"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configure sensors and physics properties"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement basic simulation scenarios"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "daily-breakdown-1",
      children: "Daily Breakdown"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day 1-2"
          }), ": Gazebo Basics"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Introduction to Gazebo Classic vs. Gazebo Ignition"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Basic simulation concepts"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Navigation and controls in Gazebo"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Understanding SDF and world files"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day 3-4"
          }), ": Robot Models in Simulation"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "URDF to SDF conversion"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Importing custom robots"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Joint configurations and dynamics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hands-on: Spawn your robot in Gazebo"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day 5-7"
          }), ": Environments and Sensors"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Creating custom environments"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Adding obstacles and scenarios"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Sensor integration (LIDAR, Camera, IMU)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hands-on: Test autonomous navigation with obstacles"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "week-2-deliverables",
      children: "Week 2 Deliverables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A simulated robot operating in a custom environment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Configured sensors (camera, LIDAR) with data publishing"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic autonomous navigation implementation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "week-3-nvidia-isaac-sim",
      children: "Week 3: NVIDIA Isaac Sim"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "learning-objectives-2",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand NVIDIA Omniverse and Isaac Sim platform"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explore RTX rendering and photorealistic simulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement physics-based simulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Generate synthetic data for AI training"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "daily-breakdown-2",
      children: "Daily Breakdown"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day 1-2"
          }), ": Isaac Sim Introduction"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Omniverse platform overview"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "RTX rendering technology"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Setting up Isaac Sim environment"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Basic navigation and controls"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day 3-4"
          }), ": Robot Articulation and Physics"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "USD-based robot modeling"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Joint control and dynamics"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Physics properties and simulation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hands-on: Import robot into Isaac Sim"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day 5-7"
          }), ": Domain Randomization and Data Generation"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Lighting and material randomization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Synthetic data generation pipeline"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Perception model training with synthetic data"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hands-on: Create task-based simulation"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "week-3-deliverables",
      children: "Week 3 Deliverables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A robot model successfully integrated into Isaac Sim"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Domain randomization implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Synthetic dataset generation pipeline"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Task-based simulation environment"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "week-4-vision-language-action-agents",
      children: "Week 4: Vision-Language-Action Agents"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "learning-objectives-3",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understand the concept of Vision-Language-Action agents"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Learn about perception-instruction-action pipeline"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Explore current VLA systems (RT-X, OpenVLA, Mobile ALOHA)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement a simple VLA system"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "daily-breakdown-3",
      children: "Daily Breakdown"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day 1-2"
          }), ": VLA Fundamentals"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "What are Vision-Language-Action agents?"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Relationship between LLMs and embodied AI"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Perception → Instruction → Action pipeline"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Current state of VLA research"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day 3-4"
          }), ": Building VLA Components"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Vision encoder implementation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Language understanding components"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Action controller development"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hands-on: Build a small VLA demo"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day 5-7"
          }), ": VLA Integration"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Combining vision, language, and action"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Integration with simulation environments"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Performance evaluation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Hands-on: Implement with vision encoder + LLM + action controller"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "week-4-deliverables",
      children: "Week 4 Deliverables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "A functional VLA system component"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration with simulation environment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Evaluation of VLA performance"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "week-5-capstone-project-planning-and-initial-implementation",
      children: "Week 5: Capstone Project Planning and Initial Implementation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "learning-objectives-4",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Plan a comprehensive capstone project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integrate concepts learned in previous weeks"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Design a complete robotics solution"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "daily-breakdown-4",
      children: "Daily Breakdown"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day 1-2"
          }), ": Capstone Project Planning"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Define project requirements and scope"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Choose from suggested projects or propose your own"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Design system architecture"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create implementation timeline"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day 3-4"
          }), ": Implementation Phase 1"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Develop core components"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Integrate ROS2 with simulation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Implement perception systems"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day 5-7"
          }), ": Implementation Phase 2"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complete action control systems"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Integrate VLA components"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Initial testing and debugging"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "week-5-deliverables",
      children: "Week 5 Deliverables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Detailed capstone project plan"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Core components implemented"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration of simulation and control systems"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "week-6-capstone-project-completion-and-deployment",
      children: "Week 6: Capstone Project Completion and Deployment"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "learning-objectives-5",
      children: "Learning Objectives"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete the capstone project implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test and validate the complete system"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Prepare deployment and demonstration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reflect on learning journey"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "daily-breakdown-5",
      children: "Daily Breakdown"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day 1-2"
          }), ": Final Implementation"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Complete all remaining components"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Integrate all modules (ROS2, Simulation, VLA)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Comprehensive testing"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day 3-4"
          }), ": Optimization and Refinement"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Performance optimization"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Debugging and issue resolution"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "User interface and experience improvements"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsxs)(_components.p, {
          children: [(0,jsx_runtime.jsx)(_components.strong, {
            children: "Day 5-7"
          }), ": Demonstration and Documentation"]
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Prepare for project demonstration"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Create documentation and presentation"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Final project submission"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Reflection and next steps"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "week-6-deliverables",
      children: "Week 6 Deliverables"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete, functional capstone project"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project demonstration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Comprehensive documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Personal learning reflection"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "recommended-time-investment",
      children: "Recommended Time Investment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Full-time learners"
        }), ": 30-40 hours per week"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Part-time learners"
        }), ": 15-20 hours per week"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "learning-prerequisites-by-week",
      children: "Learning Prerequisites by Week"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "week-1-ros2-foundations-1",
      children: "Week 1: ROS2 Foundations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic programming concepts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with Linux command line"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Python programming skills"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "week-2-gazebo-simulation-1",
      children: "Week 2: Gazebo Simulation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Completion of Week 1"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of coordinate systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic knowledge of physics concepts"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "week-3-nvidia-isaac-sim-1",
      children: "Week 3: NVIDIA Isaac Sim"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Completion of Weeks 1-2"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Understanding of 3D graphics concepts (helpful but not required)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of rendering and lighting"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "week-4-vision-language-action-agents-1",
      children: "Week 4: Vision-Language-Action Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Completion of Weeks 1-3"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Basic understanding of machine learning concepts"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Familiarity with neural networks (helpful but not required)"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "weeks-5-6-capstone-project",
      children: "Weeks 5-6: Capstone Project"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Completion of Weeks 1-4"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Ability to integrate multiple systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Problem-solving and debugging skills"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "flexibility-and-adaptation",
      children: "Flexibility and Adaptation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "accelerated-track",
      children: "Accelerated Track"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Advanced learners may complete multiple weeks simultaneously, focusing on implementing more complex projects and diving deeper into each topic."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "extended-track",
      children: "Extended Track"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Beginners may spend additional time on each week, focusing on:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Additional practice exercises"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Deep dives into specific topics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Troubleshooting and debugging time"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "assessment-and-progress-tracking",
      children: "Assessment and Progress Tracking"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "weekly-checkpoints",
      children: "Weekly Checkpoints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Daily progress tracking"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Weekly self-assessment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Peer review opportunities"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mentor feedback sessions"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "project-milestones",
      children: "Project Milestones"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Week 2: Functional simulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Week 3: Physics integration"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Week 4: VLA implementation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Week 6: Complete capstone project"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "resources-for-each-week",
      children: "Resources for Each Week"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "week-1---ros2-foundations",
      children: "Week 1 - ROS2 Foundations"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.ros.org/en/humble/",
          children: "ROS2 Documentation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "ROS2 tutorials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Community forums and support"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "week-2---gazebo-simulation",
      children: "Week 2 - Gazebo Simulation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "http://gazebosim.org/tutorials",
          children: "Gazebo Tutorials"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Robot model repositories"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Simulation best practices"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "week-3---nvidia-isaac-sim",
      children: "Week 3 - NVIDIA Isaac Sim"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: (0,jsx_runtime.jsx)(_components.a, {
          href: "https://docs.omniverse.nvidia.com/isaacsim/latest/overview.html",
          children: "Isaac Sim Documentation"
        })
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "NVIDIA Omniverse resources"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "USD format documentation"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "week-4---vision-language-action-agents",
      children: "Week 4 - Vision-Language-Action Agents"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Research papers on VLA systems"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Open-source VLA implementations"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Machine learning resources"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "weeks-5-6---capstone-project",
      children: "Weeks 5-6 - Capstone Project"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Project-specific resources"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Testing and validation tools"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps-after-completion",
      children: "Next Steps After Completion"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Upon completing the 6-week roadmap, learners will be prepared to:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Continue Research"
        }), ": Explore advanced topics in embodied AI"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Industry Applications"
        }), ": Apply skills to real-world robotics projects"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Academic Pursuits"
        }), ": Continue with advanced robotics courses"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Open Source Contributions"
        }), ": Contribute to robotics frameworks and tools"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Entrepreneurial Projects"
        }), ": Start robotics-based ventures"]
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



/***/ })

}]);