"use strict";
(globalThis["webpackChunkmy_website"] = globalThis["webpackChunkmy_website"] || []).push([[4806],{

/***/ 7240:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  assets: () => (/* binding */ assets),
  contentTitle: () => (/* binding */ contentTitle),
  "default": () => (/* binding */ MDXContent),
  frontMatter: () => (/* binding */ frontMatter),
  metadata: () => (/* reexport */ site_docs_tools_md_2b7_namespaceObject),
  toc: () => (/* binding */ toc)
});

;// ./.docusaurus/docusaurus-plugin-content-docs/default/site-docs-tools-md-2b7.json
const site_docs_tools_md_2b7_namespaceObject = /*#__PURE__*/JSON.parse('{"id":"tools","title":"Tools & Software Setup","description":"Overview","source":"@site/docs/tools.md","sourceDirName":".","slug":"/tools","permalink":"/docs/tools","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/tools.md","tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"title":"Tools & Software Setup","sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"Hardware Requirements (Optional)","permalink":"/docs/hardware"},"next":{"title":"Weekly Breakdown (Roadmap)","permalink":"/docs/roadmap"}}');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/@mdx-js/react/lib/index.js
var lib = __webpack_require__(8453);
;// ./docs/tools.md


const frontMatter = {
	title: 'Tools & Software Setup',
	sidebar_position: 7
};
const contentTitle = 'Tools & Software Setup';

const assets = {

};



const toc = [{
  "value": "Overview",
  "id": "overview",
  "level": 2
}, {
  "value": "System Requirements",
  "id": "system-requirements",
  "level": 2
}, {
  "value": "Minimum Requirements",
  "id": "minimum-requirements",
  "level": 3
}, {
  "value": "Recommended Requirements",
  "id": "recommended-requirements",
  "level": 3
}, {
  "value": "ROS2 Installation (Humble Hawksbill)",
  "id": "ros2-installation-humble-hawksbill",
  "level": 2
}, {
  "value": "On Ubuntu 22.04",
  "id": "on-ubuntu-2204",
  "level": 3
}, {
  "value": "Verification",
  "id": "verification",
  "level": 3
}, {
  "value": "Gazebo Installation",
  "id": "gazebo-installation",
  "level": 2
}, {
  "value": "Gazebo Classic (Gazebo 11)",
  "id": "gazebo-classic-gazebo-11",
  "level": 3
}, {
  "value": "Gazebo Garden",
  "id": "gazebo-garden",
  "level": 3
}, {
  "value": "NVIDIA Isaac Sim Setup",
  "id": "nvidia-isaac-sim-setup",
  "level": 2
}, {
  "value": "Prerequisites",
  "id": "prerequisites",
  "level": 3
}, {
  "value": "Isaac Sim Installation",
  "id": "isaac-sim-installation",
  "level": 3
}, {
  "value": "Alternative: Isaac Sim Docker",
  "id": "alternative-isaac-sim-docker",
  "level": 3
}, {
  "value": "Python Environment Setup",
  "id": "python-environment-setup",
  "level": 2
}, {
  "value": "Using Virtual Environment (Recommended)",
  "id": "using-virtual-environment-recommended",
  "level": 3
}, {
  "value": "Required Python Packages",
  "id": "required-python-packages",
  "level": 3
}, {
  "value": "Development Environment",
  "id": "development-environment",
  "level": 2
}, {
  "value": "VS Code Setup",
  "id": "vs-code-setup",
  "level": 3
}, {
  "value": "Alternative Editors",
  "id": "alternative-editors",
  "level": 3
}, {
  "value": "Vim/Neovim",
  "id": "vimneovim",
  "level": 4
}, {
  "value": "PyCharm",
  "id": "pycharm",
  "level": 4
}, {
  "value": "Git and Version Control",
  "id": "git-and-version-control",
  "level": 2
}, {
  "value": "Git Installation",
  "id": "git-installation",
  "level": 3
}, {
  "value": "Configuration",
  "id": "configuration",
  "level": 3
}, {
  "value": "Additional Tools",
  "id": "additional-tools",
  "level": 2
}, {
  "value": "Build Tools",
  "id": "build-tools",
  "level": 3
}, {
  "value": "Communication Protocols",
  "id": "communication-protocols",
  "level": 3
}, {
  "value": "System Monitoring",
  "id": "system-monitoring",
  "level": 3
}, {
  "value": "Troubleshooting Common Issues",
  "id": "troubleshooting-common-issues",
  "level": 2
}, {
  "value": "ROS2 Permission Issues",
  "id": "ros2-permission-issues",
  "level": 3
}, {
  "value": "Gazebo Not Starting",
  "id": "gazebo-not-starting",
  "level": 3
}, {
  "value": "Isaac Sim Performance",
  "id": "isaac-sim-performance",
  "level": 3
}, {
  "value": "Python Package Issues",
  "id": "python-package-issues",
  "level": 3
}, {
  "value": "Verification of Complete Setup",
  "id": "verification-of-complete-setup",
  "level": 2
}, {
  "value": "Next Steps",
  "id": "next-steps",
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
        id: "tools--software-setup",
        children: "Tools & Software Setup"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "overview",
      children: "Overview"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This guide provides detailed instructions for setting up all the necessary tools and software required for the Physical AI & Robotics Bootcamp. Follow these steps carefully to ensure your development environment is properly configured for all modules of the course."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "system-requirements",
      children: "System Requirements"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Before beginning the installation process, ensure your system meets the following requirements:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "minimum-requirements",
      children: "Minimum Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OS"
        }), ": Ubuntu 20.04 LTS or 22.04 LTS (preferred), Windows 10/11 with WSL2, or macOS 10.15+"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RAM"
        }), ": 8 GB minimum, 16 GB recommended"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage"
        }), ": 20 GB available space"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Processor"
        }), ": Multi-core processor with support for virtualization"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Graphics"
        }), ": Dedicated GPU recommended for Isaac Sim (NVIDIA GPU with CUDA support preferred)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "recommended-requirements",
      children: "Recommended Requirements"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "OS"
        }), ": Ubuntu 22.04 LTS"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "RAM"
        }), ": 16 GB or more"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Storage"
        }), ": 50 GB available space"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: [(0,jsx_runtime.jsx)(_components.strong, {
          children: "Graphics"
        }), ": NVIDIA GPU with 8GB+ VRAM (for Isaac Sim and deep learning tasks)"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "ros2-installation-humble-hawksbill",
      children: "ROS2 Installation (Humble Hawksbill)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "ROS2 Humble Hawksbill is the LTS (Long Term Support) version recommended for this course."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "on-ubuntu-2204",
      children: "On Ubuntu 22.04"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Set locale to support UTF-8:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "sudo locale-gen en_US.UTF-8\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add the ROS2 GPG key and repository:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "sudo apt update && sudo apt install -y curl gnupg lsb-release\nsudo curl -sSL https://raw.githubusercontent.com/ros/rosdistro/master/ros.key -o /usr/share/keyrings/ros-archive-keyring.gpg\necho \"deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/ros-archive-keyring.gpg] http://packages.ros.org/ros2/ubuntu $(source /etc/os-release && echo $UBUNTU_CODENAME) main\" | sudo tee /etc/apt/sources.list.d/ros2.list > /dev/null\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Update apt and install ROS2:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "sudo apt update\nsudo apt install -y ros-humble-desktop\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Install colcon build tool:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "sudo apt install -y python3-colcon-common-extensions\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Install ROS2 dependencies:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "sudo apt install -y python3-rosdep python3-rosinstall python3-rosinstall-generator python3-wstool build-essential\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Initialize rosdep:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "sudo rosdep init\nrosdep update\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Source the ROS2 environment:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "source /opt/ros/humble/setup.bash\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Permanently add ROS2 to your bash environment:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "echo \"source /opt/ros/humble/setup.bash\" >> ~/.bashrc\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "verification",
      children: "Verification"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Test your ROS2 installation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "ros2 topic list\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "This should run without errors."
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "gazebo-installation",
      children: "Gazebo Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gazebo-classic-gazebo-11",
      children: "Gazebo Classic (Gazebo 11)"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Gazebo Classic is included with the ROS2 desktop installation, but you can install it separately if needed:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo apt install gazebo libgazebo-dev\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gazebo-garden",
      children: "Gazebo Garden"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For the newer Gazebo version:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Add the Gazebo repository:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "sudo curl -sSL http://get.gazebosim.org | sh\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Install Gazebo Garden:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "sudo apt install gz-garden\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "nvidia-isaac-sim-setup",
      children: "NVIDIA Isaac Sim Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "NVIDIA Isaac Sim requires several prerequisites and has specific installation requirements."
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "prerequisites",
      children: "Prerequisites"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "NVIDIA GPU with CUDA support:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Compute Capability 6.0 or higher"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "At least 6GB of GPU memory (8GB+ recommended)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "NVIDIA Driver 495.44 or later"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Install NVIDIA Container Toolkit:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "curl -fsSL https://nvidia.github.io/libnvidia-container/gpgkey | sudo gpg --dearmor -o /usr/share/keyrings/nvidia-container-toolkit-keyring.gpg\ncurl -s -L https://nvidia.github.io/libnvidia-container/stable/deb/nvidia-container-toolkit.list | sed 's#deb https://#deb [signed-by=/usr/share/keyrings/nvidia-container-toolkit-keyring.gpg] https://#g' | sudo tee /etc/apt/sources.list.d/nvidia-container-toolkit.list\nsudo apt update\nsudo apt install -y nvidia-container-toolkit\nsudo nvidia-ctk runtime configure --runtime=containerd\nsudo systemctl restart containerd\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Install Docker if not already installed:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "sudo apt update\nsudo apt install -y docker.io\nsudo usermod -aG docker $USER\n# Log out and log back in for changes to take effect\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isaac-sim-installation",
      children: "Isaac Sim Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Isaac Sim can be installed through NVIDIA Omniverse:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Download and install NVIDIA Omniverse Launcher:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Visit the NVIDIA Omniverse website"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Download the Omniverse Launcher"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Run the installer"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Launch Isaac Sim through Omniverse:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Open Omniverse Launcher"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Find Isaac Sim in the asset library"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Install and launch"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alternative-isaac-sim-docker",
      children: "Alternative: Isaac Sim Docker"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For Docker-based installation:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker pull nvcr.io/nvidia/isaac-sim:latest\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Run Isaac Sim:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "docker run --gpus all -it --rm \\\n  --network=host \\\n  --env \"DISPLAY\" \\\n  --env \"QT_X11_NO_MITSHM=1\" \\\n  --volume \"/tmp/.X11-unix:/tmp/.X11-unix:rw\" \\\n  --volume \"/tmp/.docker.xauth:/tmp/.docker.xauth\" \\\n  --device=/dev/dri:/dev/dri \\\n  --privileged \\\n  --name isaac_sim \\\n  nvcr.io/nvidia/isaac-sim:latest\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "python-environment-setup",
      children: "Python Environment Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "using-virtual-environment-recommended",
      children: "Using Virtual Environment (Recommended)"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Install Python development tools:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "sudo apt install python3-pip python3-dev python3-venv\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Create a virtual environment:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "python3 -m venv ~/isaac_venv\nsource ~/isaac_venv/bin/activate\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Upgrade pip:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pip install --upgrade pip\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "required-python-packages",
      children: "Required Python Packages"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install essential packages for the course:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# For general robotics development\npip install numpy scipy matplotlib\n\n# For computer vision and image processing\npip install opencv-python opencv-contrib-python\n\n# For deep learning and AI\npip install torch torchvision torchaudio\npip install transformers\n\n# For ROS2 Python interfaces\npip install ros-numpy\n\n# For visualization\npip install plotly\n\n# For Isaac Sim (if using Python API)\npip install omniisaacgymenvs  # This is for the reinforcement learning environments\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "development-environment",
      children: "Development Environment"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "vs-code-setup",
      children: "VS Code Setup"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Install VS Code:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "sudo snap install code --classic\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Install recommended extensions for robotics development:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "ROS (for ROS/ROS2 support)"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Python"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "C/C++"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "GitLens"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Docker"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "YAML"
          }), "\n"]
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Configure ROS2 development:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Install the ROS extension"
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Set the ROS distribution path: ", (0,jsx_runtime.jsx)(_components.code, {
              children: "Ctrl+Shift+P"
            }), " → \"ROS: Set ROS Workspace\""]
          }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
            children: ["Select ", (0,jsx_runtime.jsx)(_components.code, {
              children: "/opt/ros/humble"
            })]
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "alternative-editors",
      children: "Alternative Editors"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you prefer other editors:"
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "vimneovim",
      children: "Vim/Neovim"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Install the ", (0,jsx_runtime.jsx)(_components.code, {
          children: "ros.vim"
        }), " plugin for ROS support"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["Consider using ", (0,jsx_runtime.jsx)(_components.code, {
          children: "python-mode"
        }), " for Python development"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h4, {
      id: "pycharm",
      children: "PyCharm"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
      children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Professional edition has ROS support"
      }), "\n", (0,jsx_runtime.jsx)(_components.li, {
        children: "Community edition works well for Python development"
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "git-and-version-control",
      children: "Git and Version Control"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "git-installation",
      children: "Git Installation"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Git should already be installed, but if not:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo apt install git\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "configuration",
      children: "Configuration"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "git config --global user.name \"Your Name\"\ngit config --global user.email \"your.email@example.com\"\ngit config --global core.editor \"code --wait\"  # Use VS Code as default editor for Git\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "additional-tools",
      children: "Additional Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "build-tools",
      children: "Build Tools"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install essential build tools:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo apt install build-essential cmake pkg-config\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "communication-protocols",
      children: "Communication Protocols"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Install tools for network communication:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo apt install net-tools iperf3\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "system-monitoring",
      children: "System Monitoring"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For monitoring system resources:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "sudo apt install htop nethogs iotop\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "troubleshooting-common-issues",
      children: "Troubleshooting Common Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "ros2-permission-issues",
      children: "ROS2 Permission Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you encounter permission issues with ROS2:"
    }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
      children: (0,jsx_runtime.jsx)(_components.code, {
        className: "language-bash",
        children: "# Add your user to the dialout group\nsudo usermod -a -G dialout $USER\n"
      })
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "gazebo-not-starting",
      children: "Gazebo Not Starting"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If Gazebo fails to start:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Check graphics drivers:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "nvidia-smi  # For NVIDIA\nglxinfo | grep \"OpenGL renderer\"  # Check OpenGL support\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Reset Gazebo configuration:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "rm -rf ~/.gazebo\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "isaac-sim-performance",
      children: "Isaac Sim Performance"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "For better Isaac Sim performance:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Ensure you have a compatible GPU:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "nvidia-smi\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Verify DirectX and OpenGL support:"
          })
        }), "\n", (0,jsx_runtime.jsxs)(_components.ul, {
          children: ["\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Isaac Sim requires modern graphics drivers"
          }), "\n", (0,jsx_runtime.jsx)(_components.li, {
            children: "Ensure Vulkan support if available"
          }), "\n"]
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h3, {
      id: "python-package-issues",
      children: "Python Package Issues"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you encounter Python package conflicts:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Use virtual environments:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "python3 -m venv my_robotics_env\nsource my_robotics_env/bin/activate\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Clear pip cache if needed:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "pip cache purge\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "verification-of-complete-setup",
      children: "Verification of Complete Setup"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "After completing all installations, verify your setup:"
    }), "\n", (0,jsx_runtime.jsxs)(_components.ol, {
      children: ["\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test ROS2:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "ros2 run demo_nodes_cpp talker\n"
          })
        }), "\n"]
      }), "\n", (0,jsx_runtime.jsxs)(_components.li, {
        children: ["\n", (0,jsx_runtime.jsx)(_components.p, {
          children: (0,jsx_runtime.jsx)(_components.strong, {
            children: "Test Gazebo:"
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
            children: "Test Python environment:"
          })
        }), "\n", (0,jsx_runtime.jsx)(_components.pre, {
          children: (0,jsx_runtime.jsx)(_components.code, {
            className: "language-bash",
            children: "python3 -c \"import rclpy; print('ROS2 Python interface working')\"\npython3 -c \"import cv2; print('OpenCV working')\"\npython3 -c \"import torch; print('PyTorch working')\"\n"
          })
        }), "\n"]
      }), "\n"]
    }), "\n", (0,jsx_runtime.jsx)(_components.h2, {
      id: "next-steps",
      children: "Next Steps"
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "Once your environment is properly set up, proceed to Module 1 to begin learning ROS2 foundations. Make sure all tools are properly installed and working before starting the course content."
    }), "\n", (0,jsx_runtime.jsx)(_components.p, {
      children: "If you encounter any issues during setup, consult the troubleshooting section or seek help from the course community forums."
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