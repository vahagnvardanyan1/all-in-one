"use client";

import { useCallback, useRef, useState, useMemo } from "react";
import type { DragEvent } from "react";

import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  addEdge,
  useNodesState,
  useEdgesState,
  type Connection,
  type Node,
  type Edge,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";

import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";

import { TEAM_ROLES } from "@/data/workflows";
import { CustomNode, NodePanel } from "@/components/Builder";

const initialNodes: Node[] = [
  {
    id: "1",
    type: "custom",
    position: { x: 80, y: 60 },
    data: {
      label: "Product Manager",
      color: "#f59e0b",
      avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=PM-Alpha",
      department: "Management",
      description: "Writes specs & priorities",
    },
  },
  {
    id: "2",
    type: "custom",
    position: { x: 400, y: 20 },
    data: {
      label: "UI/UX Designer",
      color: "#ec4899",
      avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=Design-Pixel",
      department: "Design",
      description: "Designs interfaces",
    },
  },
  {
    id: "3",
    type: "custom",
    position: { x: 400, y: 200 },
    data: {
      label: "Mobile Engineer",
      color: "#06b6d4",
      avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=Mobile-Swift",
      department: "Engineering",
      description: "Writes native code",
    },
  },
  {
    id: "4",
    type: "custom",
    position: { x: 720, y: 110 },
    data: {
      label: "QA Engineer",
      color: "#ef4444",
      avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=QA-Bug",
      department: "Quality",
      description: "Tests & reports bugs",
    },
  },
  {
    id: "5",
    type: "custom",
    position: { x: 1020, y: 110 },
    data: {
      label: "DevOps Engineer",
      color: "#8b5cf6",
      avatar: "https://api.dicebear.com/9.x/bottts/svg?seed=DevOps-Cloud",
      department: "Operations",
      description: "Deploys to production",
    },
  },
];

const initialEdges: Edge[] = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: true,
    style: { stroke: "#f59e0b" },
    label: "specs",
    labelStyle: { fill: "#94a3b8", fontSize: 10 },
    labelBgStyle: { fill: "#0f0f23", fillOpacity: 0.8 },
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    animated: true,
    style: { stroke: "#f59e0b" },
    label: "tasks",
    labelStyle: { fill: "#94a3b8", fontSize: 10 },
    labelBgStyle: { fill: "#0f0f23", fillOpacity: 0.8 },
  },
  {
    id: "e2-3",
    source: "2",
    target: "3",
    animated: true,
    style: { stroke: "#ec4899" },
    label: "designs",
    labelStyle: { fill: "#94a3b8", fontSize: 10 },
    labelBgStyle: { fill: "#0f0f23", fillOpacity: 0.8 },
  },
  {
    id: "e3-4",
    source: "3",
    target: "4",
    animated: true,
    style: { stroke: "#06b6d4" },
    label: "build",
    labelStyle: { fill: "#94a3b8", fontSize: 10 },
    labelBgStyle: { fill: "#0f0f23", fillOpacity: 0.8 },
  },
  {
    id: "e4-5",
    source: "4",
    target: "5",
    animated: true,
    style: { stroke: "#ef4444" },
    label: "approved",
    labelStyle: { fill: "#94a3b8", fontSize: 10 },
    labelBgStyle: { fill: "#0f0f23", fillOpacity: 0.8 },
  },
];

let nodeId = 6;
const getNextId = () => {
  const id = `${nodeId}`;
  nodeId += 1;
  return id;
};

const BuilderPage = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [reactFlowInstance, setReactFlowInstance] = useState<ReturnType<
    typeof Object
  > | null>(null);

  const nodeTypes = useMemo(() => ({ custom: CustomNode }), []);

  const onConnect = useCallback(
    (connection: Connection) => {
      setEdges((eds) =>
        addEdge(
          { ...connection, animated: true, style: { stroke: "#7c3aed" } },
          eds,
        ),
      );
    },
    [setEdges],
  );

  const onDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");
      if (!type || !reactFlowWrapper.current) return;

      const roleData = TEAM_ROLES.find((r) => r.type === type);
      if (!roleData) return;

      const bounds = reactFlowWrapper.current.getBoundingClientRect();

      const instance = reactFlowInstance as any;
      const position = instance?.screenToFlowPosition
        ? instance.screenToFlowPosition({
            x: event.clientX,
            y: event.clientY,
          })
        : {
            x: event.clientX - bounds.left,
            y: event.clientY - bounds.top,
          };

      const newNode: Node = {
        id: getNextId(),
        type: "custom",
        position,
        data: {
          label: roleData.label,
          color: roleData.color,
          avatar: roleData.avatar,
          department: roleData.department,
          description: roleData.description,
        },
      };

      setNodes((nds) => [...nds, newNode]);
      setSnackbarMessage(`Added ${roleData.label}`);
      setSnackbarOpen(true);
    },
    [reactFlowInstance, setNodes],
  );

  const handleCloseSnackbar = useCallback(() => {
    setSnackbarOpen(false);
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        height: "calc(100vh - 52px)",
        overflow: "hidden",
      }}
    >
      <NodePanel />

      <Box ref={reactFlowWrapper} sx={{ flexGrow: 1, height: "100%" }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDragOver={onDragOver}
          onDrop={onDrop}
          onInit={setReactFlowInstance}
          nodeTypes={nodeTypes}
          fitView
          proOptions={{ hideAttribution: true }}
          style={{ backgroundColor: "#030014" }}
        >
          <Background
            color="#1e1b4b"
            gap={20}
            size={1}
            variant={"dots" as never}
          />
          <Controls
            style={{
              backgroundColor: "#0f0f23",
              borderRadius: 8,
              border: "1px solid rgba(124, 58, 237, 0.2)",
            }}
          />
          <MiniMap
            nodeColor="#7c3aed"
            maskColor="rgba(3, 0, 20, 0.85)"
            style={{
              backgroundColor: "#0a0a1a",
              borderRadius: 8,
              border: "1px solid rgba(124, 58, 237, 0.2)",
            }}
          />
        </ReactFlow>
      </Box>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
      />
    </Box>
  );
};

export default BuilderPage;
