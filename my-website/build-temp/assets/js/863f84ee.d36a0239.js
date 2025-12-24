"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[5892],{

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

/***/ 9808:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_constitution_md_863_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-constitution-md-863.json
const site_docs_constitution_md_863_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"constitution","title":"Project Constitution: AI/Spec-Driven Book Creation using Docusaurus, Spec-Kit Plus, Qwen CLI, Claude Code, and GitHub Pages","description":"Chapter 0: Project Constitution","source":"@site/docs/constitution.md","sourceDirName":".","slug":"/constitution","permalink":"/docs/constitution","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/constitution.md","tags":[],"version":"current","frontMatter":{}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/constitution.md


const frontMatter = {};
const contentTitle = 'Project Constitution: AI/Spec-Driven Book Creation using Docusaurus, Spec-Kit Plus, Qwen CLI, Claude Code, and GitHub Pages';

const assets = {

};



const toc = [{
  "value": "Chapter 0: Project Constitution",
  "id": "chapter-0-project-constitution",
  "level": 2
}, {
  "value": "1. Purpose &amp; Vision",
  "id": "1-purpose--vision",
  "level": 2
}, {
  "value": "2. Scope of the Project",
  "id": "2-scope-of-the-project",
  "level": 2
}, {
  "value": "2.1 In Scope",
  "id": "21-in-scope",
  "level": 3
}, {
  "value": "2.2 Out of Scope",
  "id": "22-out-of-scope",
  "level": 3
}, {
  "value": "3. Core Principles",
  "id": "3-core-principles",
  "level": 2
}, {
  "value": "3.1 Code Quality Principles",
  "id": "31-code-quality-principles",
  "level": 3
}, {
  "value": "3.2 Testing Standards",
  "id": "32-testing-standards",
  "level": 3
}, {
  "value": "3.3 UX Consistency Guidelines",
  "id": "33-ux-consistency-guidelines",
  "level": 3
}, {
  "value": "3.4 Performance Requirements",
  "id": "34-performance-requirements",
  "level": 3
}, {
  "value": "4. Technical Architecture Overview",
  "id": "4-technical-architecture-overview",
  "level": 2
}, {
  "value": "4.1 Hardware Requirements",
  "id": "41-hardware-requirements",
  "level": 3
}, {
  "value": "4.2 Software Stack Architecture",
  "id": "42-software-stack-architecture",
  "level": 3
}, {
  "value": "4.3 Cloud vs On-Prem Robotics Lab Options",
  "id": "43-cloud-vs-on-prem-robotics-lab-options",
  "level": 3
}, {
  "value": "5. Book Creation Workflow",
  "id": "5-book-creation-workflow",
  "level": 2
}, {
  "value": "5.1 Spec-Kit Plus Usage",
  "id": "51-spec-kit-plus-usage",
  "level": 3
}, {
  "value": "5.2 Qwen CLI + Claude Code Collaboration",
  "id": "52-qwen-cli--claude-code-collaboration",
  "level": 3
}, {
  "value": "5.3 Docusaurus Structure",
  "id": "53-docusaurus-structure",
  "level": 3
}, {
  "value": "5.4 GitHub Versioning and Pages Deployment",
  "id": "54-github-versioning-and-pages-deployment",
  "level": 3
}, {
  "value": "6. Coding Standards",
  "id": "6-coding-standards",
  "level": 2
}, {
  "value": "6.1 Python + ROS 2 Coding Guidelines",
  "id": "61-python--ros-2-coding-guidelines",
  "level": 3
}, {
  "value": "6.2 URDF/SDF Formatting",
  "id": "62-urdfsdf-formatting",
  "level": 3
}, {
  "value": "6.3 Simulation Configuration Rules",
  "id": "63-simulation-configuration-rules",
  "level": 3
}, {
  "value": "7. Testing Standards",
  "id": "7-testing-standards",
  "level": 2
}, {
  "value": "7.1 Unit Tests for ROS Nodes",
  "id": "71-unit-tests-for-ros-nodes",
  "level": 3
}, {
  "value": "7.2 Simulation-Level Tests",
  "id": "72-simulation-level-tests",
  "level": 3
}, {
  "value": "7.3 Hardware-in-the-Loop (HIL) Tests",
  "id": "73-hardware-in-the-loop-hil-tests",
  "level": 3
}, {
  "value": "8. Performance Benchmarks",
  "id": "8-performance-benchmarks",
  "level": 2
}, {
  "value": "8.1 Physics Simulation Stability",
  "id": "81-physics-simulation-stability",
  "level": 3
}, {
  "value": "8.2 GPU VRAM Constraints",
  "id": "82-gpu-vram-constraints",
  "level": 3
}, {
  "value": "8.3 Latency Requirements",
  "id": "83-latency-requirements",
  "level": 3
}, {
  "value": "9. User Experience (UX) Principles",
  "id": "9-user-experience-ux-principles",
  "level": 2
}, {
  "value": "9.1 Writing Style Rules",
  "id": "91-writing-style-rules",
  "level": 3
}, {
  "value": "9.2 Documentation Layout",
  "id": "92-documentation-layout",
  "level": 3
}, {
  "value": "9.3 Reproducibility and Accessibility",
  "id": "93-reproducibility-and-accessibility",
  "level": 3
}, {
  "value": "10. Governance Model",
  "id": "10-governance-model",
  "level": 2
}, {
  "value": "10.1 Roles and Responsibilities",
  "id": "101-roles-and-responsibilities",
  "level": 3
}, {
  "value": "10.2 Approval Pipeline",
  "id": "102-approval-pipeline",
  "level": 3
}, {
  "value": "10.3 Quality Gates",
  "id": "103-quality-gates",
  "level": 3
}, {
  "value": "11. Version Control Rules",
  "id": "11-version-control-rules",
  "level": 2
}, {
  "value": "11.1 Branching Model",
  "id": "111-branching-model",
  "level": 3
}, {
  "value": "11.2 Commit Message Format",
  "id": "112-commit-message-format",
  "level": 3
}, {
  "value": "11.3 Release Versioning",
  "id": "113-release-versioning",
  "level": 3
}, {
  "value": "12. Final Deliverables",
  "id": "12-final-deliverables",
  "level": 2
}, {
  "value": "12.1 Book Components",
  "id": "121-book-components",
  "level": 3
}, {
  "value": "12.2 Repository Structure",
  "id": "122-repository-structure",
  "level": 3
}, {
  "value": "12.3 Specification Outputs",
  "id": "123-specification-outputs",
  "level": 3
}, {
  "value": "12.4 Capstone Demo Documentation",
  "id": "124-capstone-demo-documentation",
  "level": 3
}, {
  "value": "Conclusion",
  "id": "conclusion",
  "level": 2
}];
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    header: "header",
    hr: "hr",
    li: "li",
    p: "p",
    pre: "pre",
    strong: "strong",
    table: "table",
    tbody: "tbody",
    td: "td",
    th: "th",
    thead: "thead",
    tr: "tr",
    ul: "ul",
    ...(0,lib/* useMDXComponents */.R)(),
    ...props.components
  };
  return (0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [(0,jsx_runtime.jsx)(_components.header, {
      children: (0,jsx_runtime.jsx)(_components.h1, {
        id: "project-constitution-aispec-driven-book-creation-using-docusaurus-spec-kit-plus-qwen-cli-claude-code-and-github-pages",
        children: "Project Constitution: AI/Spec-Driven Book Creation using Docusaurus, Spec-Kit Plus, Qwen CLI, Claude Code, and GitHub Pages"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "chapter-0-project-constitution",
      children: "Chapter 0: Project Constitution"
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "1-purpose--vision",
      children: "1. Purpose & Vision"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["The ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Physical AI & Humanoid Robotics"
      }), " curriculum project aims to establish a comprehensive, spec-driven educational framework that bridges the gap between theoretical AI concepts and practical humanoid robotics implementation. This constitution defines the foundational principles, technical architecture, and governance model for creating a world-class educational resource that will serve students, researchers, and industry professionals in the emerging field of Physical AI."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Vision Statement"
      }), ": To create an authoritative, living document that serves as the definitive guide for developing AI-powered humanoid robots, combining cutting-edge simulation technologies, real-world deployment strategies, and accessible educational content that democratizes access to advanced robotics research."]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Mission"
      }), ": To produce a comprehensive, spec-driven book that systematically covers the four fundamental pillars of modern humanoid robotics: distributed system architecture (ROS 2), digital twin simulation (Gazebo/Unity), AI-powered perception and navigation (NVIDIA Isaac), and multimodal human-robot interaction (Vision-Language-Action systems)."]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "2-scope-of-the-project",
      children: "2. Scope of the Project"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "21-in-scope",
      children: "2.1 In Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Complete curriculum documentation covering all four modules"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Spec-driven content creation using Spec-Kit Plus methodology"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Docusaurus-based book generation and deployment"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Integration with Qwen CLI for automated content generation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Claude Code assistance for technical documentation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "GitHub Pages hosting for public access"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Reproducible examples and tutorials"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Hardware and software configuration guides"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Performance benchmarking and optimization guides"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "22-out-of-scope",
      children: "2.2 Out of Scope"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Manufacturing of physical humanoid robots"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Direct hardware sales or support"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Commercial licensing of robotic platforms"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Real-time control algorithm optimization beyond educational scope"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Advanced research beyond current state-of-the-art"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "3-core-principles",
      children: "3. Core Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "31-code-quality-principles",
      children: "3.1 Code Quality Principles"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modularity"
        }), ": All code examples must follow modular design patterns with clear separation of concerns"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation"
        }), ": Every function, class, and module must include comprehensive docstrings following PEP 257"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing"
        }), ": All code must include unit tests with minimum 85% coverage"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Type Safety"
        }), ": Use type hints extensively, especially for ROS 2 message interfaces"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Error Handling"
        }), ": Robust error handling with meaningful error messages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance"
        }), ": Code must be optimized for real-time constraints where applicable"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "32-testing-standards",
      children: "3.2 Testing Standards"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Unit Tests"
        }), ": Individual components must be testable in isolation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Integration Tests"
        }), ": ROS 2 nodes must be tested for proper communication"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simulation Tests"
        }), ": All examples must be validated in simulation environments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardware Tests"
        }), ": Critical functionality must be validated on actual hardware where possible"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Regression Tests"
        }), ": Automated testing pipeline to prevent functionality degradation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "33-ux-consistency-guidelines",
      children: "3.3 UX Consistency Guidelines"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Progressive Disclosure"
        }), ": Complex concepts introduced gradually with increasing complexity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-Module Consistency"
        }), ": Consistent terminology and naming conventions across all modules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Accessibility"
        }), ": All content must be accessible to diverse learning needs"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visual Hierarchy"
        }), ": Clear visual organization of concepts, code examples, and diagrams"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interactive Elements"
        }), ": Embedded simulators, code playgrounds, and visualization tools"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Navigation"
        }), ": Intuitive navigation with clear breadcrumbs and related content links"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "34-performance-requirements",
      children: "3.4 Performance Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Simulation Stability"
        }), ": Physics simulation must maintain 60 FPS minimum for basic scenarios"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "VRAM Utilization"
        }), ": GPU memory usage must be optimized for RTX 3080+ level hardware"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Latency Limits"
        }), ": VSLAM and navigation systems must maintain <100ms response time"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Throughput"
        }), ": Data processing pipelines must handle 30+ FPS sensor input"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Real-time Constraints"
        }), ": Control loops must maintain 50-200Hz operation rates"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "4-technical-architecture-overview",
      children: "4. Technical Architecture Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "41-hardware-requirements",
      children: "4.1 Hardware Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────────────────┐\n│                  Simulation Workstation                     │\n├─────────────────────────────────────────────────────────────┤\n│ • GPU: NVIDIA RTX 4090 / A6000 or equivalent               │\n│ • CPU: 16+ cores, 3.0+ GHz (Intel i9 / AMD TR 3960X)      │\n│ • RAM: 64GB+ DDR4/DDR5                                      │\n│ • Storage: 2TB+ NVMe SSD                                    │\n│ • Network: 10GbE for distributed simulation                 │\n└─────────────────────────────────────────────────────────────┘\n\n┌─────────────────────────────────────────────────────────────┐\n│                 Jetson Orin Edge AI Kit                     │\n├─────────────────────────────────────────────────────────────┤\n│ • Platform: NVIDIA Jetson Orin AGX (64-core ARM CPU)       │\n│ • GPU: 2048-core NVIDIA Ampere GPU                         │\n│ • Memory: 32GB 256-bit LPDDR5x @ 204.8GB/s                │\n│ • Storage: 64GB eUFS 3.1                                     │\n│ • Power: 15W-60W configurable operation                     │\n└─────────────────────────────────────────────────────────────┘\n\n┌─────────────────────────────────────────────────────────────┐\n│                   Sensor Configuration                      │\n├─────────────────────────────────────────────────────────────┤\n│ • LiDAR: Ouster OS0-64 or comparable                       │\n│ • RGB-D: Intel RealSense D455                              │\n│ • IMU: Bosch BNO055 or ADIS16470                           │\n│ • Microphone: ReSpeaker 4-Mic Array                        │\n│ • Cameras: Multiple synchronized RGB cameras               │\n└─────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "42-software-stack-architecture",
      children: "4.2 Software Stack Architecture"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────────────────────────────────────────────────┐\n│                    Application Layer                        │\n├─────────────────────────────────────────────────────────────┤\n│ • VLA (Voice-Language-Action) Interface                    │\n│ • Cognitive Planning Engine                                │\n│ • Human-Robot Interaction Framework                        │\n└─────────────────────────────────────────────────────────────┘\n                              │\n┌─────────────────────────────────────────────────────────────┐\n│                    AI/Perception Layer                      │\n├─────────────────────────────────────────────────────────────┤\n│ • NVIDIA Isaac ROS (VSLAM, Perception)                     │\n│ • Vision-Language Models                                   │\n│ • Speech Recognition (Whisper)                             │\n│ • Navigation (Nav2)                                        │\n└─────────────────────────────────────────────────────────────┘\n                              │\n┌─────────────────────────────────────────────────────────────┐\n│                   Communication Layer                       │\n├─────────────────────────────────────────────────────────────┤\n│ • ROS 2 (Humble Hawksbill)                                 │\n│ • Nodes, Topics, Services, Actions                           │\n│ • rclpy Python Bridge                                      │\n└─────────────────────────────────────────────────────────────┘\n                              │\n┌─────────────────────────────────────────────────────────────┐\n│                    Simulation Layer                         │\n├─────────────────────────────────────────────────────────────┤\n│ • Gazebo Harmonic (Physics Simulation)                     │\n│ • Unity 3D (High-fidelity Visualization)                   │\n│ • Isaac Sim (Photorealistic Simulation)                    │\n└─────────────────────────────────────────────────────────────┘\n                              │\n┌─────────────────────────────────────────────────────────────┐\n│                   Hardware Abstraction                      │\n├─────────────────────────────────────────────────────────────┤\n│ • Jetson Orin Drivers                                      │\n│ • Sensor Drivers (LiDAR, Camera, IMU)                      │\n│ • Motor Control Interfaces                                 │\n└─────────────────────────────────────────────────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "43-cloud-vs-on-prem-robotics-lab-options",
      children: "4.3 Cloud vs On-Prem Robotics Lab Options"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Aspect"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Cloud Robotics Lab"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "On-Prem Robotics Lab"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Cost"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Pay-per-use model, scalable"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High initial investment, fixed costs"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Compute"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Auto-scaling GPU clusters"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dedicated high-end workstations"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Storage"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Object storage (S3/Cloud)"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local NVMe arrays"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Network"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "High-bandwidth internet"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "10GbE local network"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Access"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Remote access anywhere"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Physical presence required"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maintenance"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Provider managed"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "In-house IT team"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Security"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Encrypted transmission"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Local network security"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "5-book-creation-workflow",
      children: "5. Book Creation Workflow"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "51-spec-kit-plus-usage",
      children: "5.1 Spec-Kit Plus Usage"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Specification Generation"
        }), ": Use Spec-Kit Plus to create detailed technical specifications before implementation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Model-Driven Development"
        }), ": Generate code and documentation from formal specifications"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Validation Framework"
        }), ": Automated validation of implementations against specifications"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Control"
        }), ": Track specification changes with Git integration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Template System"
        }), ": Use pre-built templates for robotics-specific documentation patterns"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "52-qwen-cli--claude-code-collaboration",
      children: "5.2 Qwen CLI + Claude Code Collaboration"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Content Generation"
        }), ": Qwen CLI for initial content scaffolding"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technical Review"
        }), ": Claude Code for technical accuracy and best practices"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Iterative Refinement"
        }), ": Multiple review cycles for content quality"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Verification"
        }), ": Automated testing of all provided code examples"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-Module Consistency"
        }), ": Automated checking of terminology and concepts across modules"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "53-docusaurus-structure",
      children: "5.3 Docusaurus Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "my-website/\n├── docs/\n│   ├── constitution.md                 # This document\n│   ├── module-1-ros2.md               # ROS2 concepts and implementation\n│   ├── module-2-digital-twin/         # Digital twin simulation\n│   │   ├── gazebo-simulation.md       # Gazebo simulation environment\n│   │   ├── unity-visualization.md     # Unity visualization (planned)\n│   │   └── sensor-simulation.md       # Sensor simulation (planned)\n│   ├── module-3-ai-brain/             # AI brain and perception\n│   │   ├── isaac-sim.md               # Isaac Sim advanced simulation\n│   │   ├── perception-systems.md      # Perception systems (planned)\n│   │   └── navigation-planning.md     # Navigation and planning (planned)\n│   ├── module-4-vla/                  # Vision-language-action models\n│   │   ├── index.md\n│   │   ├── speech-to-action.md        # Speech to action conversion (planned)\n│   │   ├── cognitive-planning.md      # Cognitive planning (planned)\n│   │   └── multi-modal-interaction.md # Multi-modal interaction (planned)\n│   ├── capstone.md                    # Capstone project\n│   ├── hardware.md                    # Hardware setup and integration\n│   ├── intro.md                       # Introduction\n│   ├── roadmap.md                     # Project roadmap\n│   ├── tools.md                       # Tools and setup\n│   ├── tutorial-basics/               # Docusaurus tutorial basics\n│   └── tutorial-extras/               # Docusaurus tutorial extras\n├── blog/\n├── src/\n│   ├── components/\n│   └── css/\n├── static/\n│   ├── img/\n│   └── videos/\n├── docusaurus.config.ts\n└── sidebars.ts\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "54-github-versioning-and-pages-deployment",
      children: "5.4 GitHub Versioning and Pages Deployment"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Branching Strategy"
        }), ": GitFlow with ", (0,jsx_runtime.jsx)(_components.code, {
          children: "main"
        }), ", ", (0,jsx_runtime.jsx)(_components.code, {
          children: "develop"
        }), ", and feature branches"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Pull Request Reviews"
        }), ": 2+ reviewers for all content changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Automated Builds"
        }), ": GitHub Actions for Docusaurus build and testing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Preview Deployments"
        }), ": Netlify/Cloudflare for PR previews"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Production Deployment"
        }), ": GitHub Pages for live documentation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "6-coding-standards",
      children: "6. Coding Standards"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "61-python--ros-2-coding-guidelines",
      children: "6.1 Python + ROS 2 Coding Guidelines"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "# ROS 2 Node Template\nimport rclpy\nfrom rclpy.node import Node\nfrom std_msgs.msg import String\nfrom sensor_msgs.msg import Image, Imu\nfrom geometry_msgs.msg import Twist\nfrom typing import Optional, List, Dict, Any\n\nclass HumanoidControllerNode(Node):\n    \"\"\"\n    Humanoid robot controller node implementing best practices for ROS 2.\n\n    This node demonstrates proper ROS 2 design patterns including:\n    - Clear parameter management\n    - Proper QoS profiles for real-time performance\n    - Type hinting for maintainability\n    - Comprehensive logging\n    \"\"\"\n\n    def __init__(self):\n        super().__init__('humanoid_controller')\n\n        # Parameter declaration with defaults\n        self.declare_parameter('control_frequency', 50)  # Hz\n        self.declare_parameter('max_velocity', 0.5)     # m/s\n\n        # Store parameters for use\n        self.control_frequency = self.get_parameter('control_frequency').value\n        self.max_velocity = self.get_parameter('max_velocity').value\n\n        # Publishers and subscribers\n        self.cmd_vel_pub = self.create_publisher(Twist, '/cmd_vel', 10)\n        self.sensor_sub = self.create_subscription(\n            Imu, '/imu/data', self.imu_callback, 10\n        )\n\n        # Control loop timer\n        self.control_timer = self.create_timer(\n            1.0 / self.control_frequency,\n            self.control_loop\n        )\n\n        self.get_logger().info(f'Humanoid controller initialized at {self.control_frequency}Hz')\n\n    def imu_callback(self, msg: Imu):\n        \"\"\"Handle IMU sensor data with proper error handling.\"\"\"\n        try:\n            # Process IMU data\n            orientation = msg.orientation\n            angular_velocity = msg.angular_velocity\n            linear_acceleration = msg.linear_acceleration\n\n            # Implement sensor fusion logic here\n            # ...\n\n        except Exception as e:\n            self.get_logger().error(f'Error processing IMU data: {e}')\n\n    def control_loop(self):\n        \"\"\"Main control loop with real-time constraints.\"\"\"\n        # Implement control algorithm here\n        # ...\n        pass\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "ROS 2 Best Practices"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use composition over inheritance where possible"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement proper QoS profiles for performance-critical topics"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use services for synchronous operations, topics for asynchronous"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Implement latching for static transforms and parameters"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use actions for long-running tasks with feedback"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "62-urdfsdf-formatting",
      children: "6.2 URDF/SDF Formatting"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-xml",
        children: "<?xml version=\"1.0\" ?>\n<robot name=\"humanoid_robot\" xmlns:xacro=\"http://www.ros.org/wiki/xacro\">\n  <!-- Base link definition -->\n  <link name=\"base_link\">\n    <visual>\n      <geometry>\n        <box size=\"0.3 0.2 0.1\"/>\n      </geometry>\n      <material name=\"gray\">\n        <color rgba=\"0.5 0.5 0.5 1.0\"/>\n      </material>\n    </visual>\n    <collision>\n      <geometry>\n        <box size=\"0.3 0.2 0.1\"/>\n      </geometry>\n    </collision>\n    <inertial>\n      <mass value=\"5.0\"/>\n      <inertia ixx=\"0.1\" ixy=\"0.0\" ixz=\"0.0\" iyy=\"0.1\" iyz=\"0.0\" izz=\"0.1\"/>\n    </inertial>\n  </link>\n\n  <!-- Joint definition -->\n  <joint name=\"base_to_torso\" type=\"fixed\">\n    <parent link=\"base_link\"/>\n    <child link=\"torso_link\"/>\n    <origin xyz=\"0 0 0.1\" rpy=\"0 0 0\"/>\n  </joint>\n\n  <link name=\"torso_link\">\n    <visual>\n      <geometry>\n        <cylinder radius=\"0.1\" length=\"0.5\"/>\n      </geometry>\n    </visual>\n    <collision>\n      <geometry>\n        <cylinder radius=\"0.1\" length=\"0.5\"/>\n      </geometry>\n    </collision>\n    <inertial>\n      <mass value=\"3.0\"/>\n      <inertia ixx=\"0.05\" ixy=\"0.0\" ixz=\"0.0\" iyy=\"0.05\" iyz=\"0.0\" izz=\"0.025\"/>\n    </inertial>\n  </link>\n\n  <!-- Gazebo-specific properties -->\n  <gazebo reference=\"base_link\">\n    <material>Gazebo/Gray</material>\n  </gazebo>\n</robot>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "URDF/SDF Standards"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use consistent naming conventions (snake_case for links/joints)"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define proper inertial properties for physics simulation"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Include collision and visual geometry for all links"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Use xacro macros for reusable components"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Define proper transmission interfaces for actuated joints"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "63-simulation-configuration-rules",
      children: "6.3 Simulation Configuration Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Physics Parameters"
        }), ": Use realistic physics parameters matching real-world conditions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sensor Configuration"
        }), ": Configure sensors with accurate noise models and parameters"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Environment Design"
        }), ": Create diverse environments for comprehensive testing"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance Optimization"
        }), ": Use level-of-detail (LOD) models for complex scenes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Reproducibility"
        }), ": Use fixed random seeds for deterministic simulation results"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "7-testing-standards",
      children: "7. Testing Standards"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "71-unit-tests-for-ros-nodes",
      children: "7.1 Unit Tests for ROS Nodes"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-python",
        children: "import unittest\nimport rclpy\nfrom rclpy.executors import SingleThreadedExecutor\nfrom humanoid_controller import HumanoidControllerNode\n\nclass TestHumanoidController(unittest.TestCase):\n\n    @classmethod\n    def setUpClass(cls):\n        rclpy.init()\n\n    @classmethod\n    def tearDownClass(cls):\n        rclpy.shutdown()\n\n    def setUp(self):\n        self.node = HumanoidControllerNode()\n        self.executor = SingleThreadedExecutor()\n        self.executor.add_node(self.node)\n\n    def tearDown(self):\n        self.node.destroy_node()\n\n    def test_parameter_initialization(self):\n        \"\"\"Test that parameters are properly initialized.\"\"\"\n        self.assertEqual(self.node.control_frequency, 50)\n        self.assertEqual(self.node.max_velocity, 0.5)\n\n    def test_imu_callback(self):\n        \"\"\"Test IMU callback without errors.\"\"\"\n        # Create mock IMU message\n        from sensor_msgs.msg import Imu\n        msg = Imu()\n\n        # Call callback without errors\n        self.node.imu_callback(msg)\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Testing Requirements"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Minimum 85% code coverage for all ROS nodes"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test both success and failure scenarios"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Mock external dependencies where appropriate"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Test parameter validation and error handling"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Validate message serialization/deserialization"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "72-simulation-level-tests",
      children: "7.2 Simulation-Level Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Physics Validation"
        }), ": Verify realistic physics behavior through simulation tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sensor Simulation"
        }), ": Test sensor outputs match expected ranges and noise characteristics"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Robot Kinematics"
        }), ": Validate forward and inverse kinematics solutions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Path Planning"
        }), ": Test navigation algorithms in diverse simulated environments"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multi-Robot Interaction"
        }), ": Test coordination between multiple simulated robots"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "73-hardware-in-the-loop-hil-tests",
      children: "7.3 Hardware-in-the-Loop (HIL) Tests"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Actuator Control"
        }), ": Validate motor control commands through real hardware"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Sensor Validation"
        }), ": Compare simulated vs real sensor data"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System Integration"
        }), ": Test complete system functionality on physical hardware"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance Testing"
        }), ": Measure real-time performance constraints"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety Validation"
        }), ": Verify safety systems function correctly with real hardware"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "8-performance-benchmarks",
      children: "8. Performance Benchmarks"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "81-physics-simulation-stability",
      children: "8.1 Physics Simulation Stability"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Metric"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Minimum Acceptable"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Measurement Method"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Simulation FPS"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "60+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "30+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Average over 10-minute simulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Physics Accuracy"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<1% drift/hour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<5% drift/hour"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Position/velocity error accumulation"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Memory Usage"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<8GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<16GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Peak memory consumption"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "CPU Utilization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<70%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<90%"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Maximum sustained CPU usage"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Determinism"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<0.1% variation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<1% variation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Identical initial conditions"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "82-gpu-vram-constraints",
      children: "8.2 GPU VRAM Constraints"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "VRAM Requirement"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target Hardware"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Optimization Strategy"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Gazebo Simulation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "4-6GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTX 3080+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Level-of-detail models"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Unity Visualization"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "6-8GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTX 4090+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Texture streaming"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Isaac Sim"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-12GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "A6000+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Dynamic batching"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VSLAM Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2-4GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Jetson Orin"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature tracking optimization"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Neural Networks"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "8-16GB"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "RTX 4090+"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Model quantization"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "83-latency-requirements",
      children: "8.3 Latency Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "System Component"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Target Latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Maximum Latency"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Test Scenario"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "VSLAM Processing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<50ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<100ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Feature tracking + mapping"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Navigation Planning"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<100ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<200ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Path planning in dynamic environment"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Voice Recognition"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<200ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<500ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Speech-to-text processing"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Action Execution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<50ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<100ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Command to motor response"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: "Sensor Fusion"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<10ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "<20ms"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "IMU + LiDAR + camera fusion"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "9-user-experience-ux-principles",
      children: "9. User Experience (UX) Principles"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "91-writing-style-rules",
      children: "9.1 Writing Style Rules"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Active Voice"
        }), ": Use active voice for clearer communication"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technical Clarity"
        }), ": Define all technical terms upon first use"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Progressive Complexity"
        }), ": Introduce concepts in order of increasing complexity"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Practical Examples"
        }), ": Provide concrete examples and use cases"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Visual Aids"
        }), ": Include diagrams, screenshots, and code examples"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Consistent Terminology"
        }), ": Use consistent technical terms throughout"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "92-documentation-layout",
      children: "9.2 Documentation Layout"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Modular Structure"
        }), ": Organize content in discrete, digestible modules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Clear Headings"
        }), ": Use hierarchical headings for easy navigation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Block Syntax"
        }), ": Highlight syntax for all programming languages"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interactive Elements"
        }), ": Include embedded simulators where applicable"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Cross-References"
        }), ": Link related concepts and modules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Summary Sections"
        }), ": Include key takeaways at module ends"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "93-reproducibility-and-accessibility",
      children: "9.3 Reproducibility and Accessibility"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complete Setup Guides"
        }), ": Provide step-by-step hardware and software setup"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Version Control"
        }), ": Specify exact software and hardware versions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardware Alternatives"
        }), ": Document alternative hardware configurations"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Troubleshooting Sections"
        }), ": Include comprehensive troubleshooting guides"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Accessibility Compliance"
        }), ": Follow WCAG 2.1 guidelines for accessibility"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Multilingual Support"
        }), ": Plan for internationalization and translation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "10-governance-model",
      children: "10. Governance Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "101-roles-and-responsibilities",
      children: "10.1 Roles and Responsibilities"
    }), "\n", (0,jsx_runtime.jsxs)(_components.table, {
      children: [(0,jsx_runtime.jsx)(_components.thead, {
        children: (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.th, {
            children: "Role"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Responsibilities"
          }), (0,jsx_runtime.jsx)(_components.th, {
            children: "Required Qualifications"
          })]
        })
      }), (0,jsx_runtime.jsxs)(_components.tbody, {
        children: [(0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Writer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Create technical content, implement examples"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "2+ years robotics/ROS experience"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Reviewer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Technical accuracy review, quality validation"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Expertise in relevant module area"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Maintainer"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Content maintenance, issue resolution"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "5+ years domain expertise"
          })]
        }), (0,jsx_runtime.jsxs)(_components.tr, {
          children: [(0,jsx_runtime.jsx)(_components.td, {
            children: (0,jsx_runtime.jsx)(_components.strong, {
              children: "Technical Validator"
            })
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Hardware validation, performance testing"
          }), (0,jsx_runtime.jsx)(_components.td, {
            children: "Access to target hardware platforms"
          })]
        })]
      })]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "102-approval-pipeline",
      children: "10.2 Approval Pipeline"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐\n│   Author        │───▶│   Reviewer      │───▶│  Technical      │\n│   Submits       │    │   Validates     │    │  Validator      │\n│   Content       │    │   Technical     │    │   Validates     │\n└─────────────────┘    │   Accuracy      │    │   Hardware      │\n                       └─────────────────┘    └─────────────────┘\n                              │                       │\n                              ▼                       ▼\n                    ┌─────────────────┐    ┌─────────────────┐\n                    │   Maintainer    │───▶│    Approve/     │\n                    │    Merges       │    │   Request       │\n                    │   Content       │    │   Changes       │\n                    └─────────────────┘    └─────────────────┘\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "103-quality-gates",
      children: "10.3 Quality Gates"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Technical Accuracy"
        }), ": All content must be verified by domain experts"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Verification"
        }), ": All provided code must be tested and functional"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardware Validation"
        }), ": Critical examples must be validated on target hardware"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance Requirements"
        }), ": All systems must meet stated performance benchmarks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Documentation Completeness"
        }), ": All required sections must be present"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "11-version-control-rules",
      children: "11. Version Control Rules"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "111-branching-model",
      children: "11.1 Branching Model"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "main (stable) ──────────────────────────────────────●\n               \\                                     │\ndevelop (integration) ────────────●─────────────────┼─●\n                 \\                 │                 │ │\nfeature/ros2-nodes ───●───────────┼─────────────────┼─┼──●\n                        \\         │                 │ │  │\nfeature/urdf-models ────┼─────────●─────────────────┼─┼──┼──●\n                          \\                         │ │ │  │\nbugfix/imu-calibration ───┼─────────────────────────●─┼──┼──┼──●\n                            \\                         │ │ │  │\nfeature/vslam-system ───────┼─────────────────────────┼─●─┼──┼──●\n                              \\                       │ │ │  │\nhotfix/critical-bug ──────────┼───────────────────────┼─┼─●──┼──●\n                                \\                     │ │ │  │\nrelease/v1.0.0 ─────────────────┼─────────────────────┼─┼─┼──┼──●\n                                  \\                   │ │ │  │\nmaintenance/doc-updates ──────────┼───────────────────┼─┼─┼──┼──●\n                                    \\                 │ │ │  │\nfeature/voice-control ──────────────┼─────────────────┼─┼─┼──┼──●\n                                      \\               │ │ │  │\nfeature/navigation-planning ──────────┼───────────────┼─┼─┼──┼──●\n                                        \\             │ │ │  │\nfeature/multi-modal-interaction ────────┼─────────────┼─┼─┼──┼──●\n                                          \\           │ │ │  │\ncleanup/remove-deprecated ────────────────┼───────────┼─┼─┼──┼──●\n                                            \\         │ │ │  │\ndocumentation/improve-examples ─────────────┼───────┬─┼─┼─┼──┼──●\n                                              \\     │ │ │ │  │\n                                              ●─────●─●─●─●──●──●\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "112-commit-message-format",
      children: "11.2 Commit Message Format"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "All commits must follow the conventional commits specification:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "<type>(<scope>): <short summary>\n<BLANK LINE>\n<body>\n<BLANK LINE>\n<footer>\n"
      })
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Types"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "feat"
        }), ": New feature implementation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "fix"
        }), ": Bug fixes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "docs"
        }), ": Documentation changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "style"
        }), ": Code style/formatting"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "refactor"
        }), ": Code restructuring without functional changes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "test"
        }), ": Adding or modifying tests"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "perf"
        }), ": Performance improvements"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "chore"
        }), ": Maintenance tasks"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Scopes"
      }), ":"]
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "robot-model"
        }), ": Robot URDF/SDF models"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "control"
        }), ": Robot control systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "simulation"
        }), ": Gazebo/Unity simulation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "ai-core"
        }), ": AI and perception systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "vla"
        }), ": Vision-Language-Action systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "isaac"
        }), ": NVIDIA Isaac integration"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.code, {
          children: "book"
        }), ": Documentation and book content"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "113-release-versioning",
      children: "11.3 Release Versioning"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Major Version"
        }), ": Breaking changes, new modules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Minor Version"
        }), ": New features within existing modules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Patch Version"
        }), ": Bug fixes, documentation updates"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Format"
        }), ": MAJOR.MINOR.PATCH (e.g., 1.2.3)"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Prerelease"
        }), ": Include alpha/beta tags for testing versions"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "12-final-deliverables",
      children: "12. Final Deliverables"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "121-book-components",
      children: "12.1 Book Components"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Complete Curriculum"
        }), ": Comprehensive documentation covering all four modules"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interactive Examples"
        }), ": Embedded simulators and code playgrounds"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Code Repositories"
        }), ": All example code with proper documentation"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Specification Documents"
        }), ": Formal specifications for all systems"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Video Tutorials"
        }), ": Step-by-step implementation guides"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Assessment Tools"
        }), ": Knowledge checks and practical exercises"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "122-repository-structure",
      children: "12.2 Repository Structure"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        children: "Physical-AI-Humanoid-Robotics/\n├── book-documentation/          # Docusaurus website\n├── simulation-environments/     # Gazebo/Unity worlds\n├── ros-packages/               # ROS 2 packages\n├── isaac-modules/              # NVIDIA Isaac integration\n├── hardware-drivers/           # Sensor and actuator drivers\n├── spec-kit-plus-specs/        # Formal specifications\n├── capstone-demo/              # Complete system integration\n└── evaluation-framework/       # Testing and benchmarking tools\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "123-specification-outputs",
      children: "12.3 Specification Outputs"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System Architecture Documents"
        }), ": Detailed technical architecture"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Interface Specifications"
        }), ": API contracts and message definitions"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance Requirements"
        }), ": Quantitative performance targets"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Testing Procedures"
        }), ": Detailed test procedures and acceptance criteria"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Deployment Guides"
        }), ": Production deployment and maintenance guides"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Safety Protocols"
        }), ": Safety procedures for hardware operation"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "124-capstone-demo-documentation",
      children: "12.4 Capstone Demo Documentation"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "System Integration"
        }), ": Complete system integration guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Demo Scenarios"
        }), ": Detailed demo scenarios with expected outcomes"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Performance Validation"
        }), ": Results of all performance benchmarks"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Hardware Setup"
        }), ": Complete hardware configuration guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Troubleshooting"
        }), ": Comprehensive troubleshooting guide"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Future Roadmap"
        }), ": Planned enhancements and future development"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "conclusion",
      children: "Conclusion"
    }), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: ["This Project Constitution establishes the foundational framework for developing the ", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Physical AI & Humanoid Robotics"
      }), " curriculum. All contributors must adhere to these principles, standards, and procedures to ensure the delivery of a high-quality, technically accurate, and educationally valuable resource that will serve the robotics community for years to come."]
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This constitution shall remain a living document, subject to updates through the established governance model as technology advances and requirements evolve."
    }), "\n", (0,jsx_runtime.jsx)(_components.hr, {}), "\n", (0,jsx_runtime.jsxs)(_components.p, {
      children: [(0,jsx_runtime.jsx)(_components.strong, {
        children: "Document Version"
      }), ": 1.0.0\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Last Updated"
      }), ": December 2024\n", (0,jsx_runtime.jsx)(_components.strong, {
        children: "Next Review"
      }), ": March 2025"]
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