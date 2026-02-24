"use client";

import { Handle, Position } from "@xyflow/react";
import type { NodeProps } from "@xyflow/react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import {
  NodeCard,
  NodeContent,
  AvatarWrapper,
  NodeTextWrap,
  DepartmentBadge,
} from "./styled";

interface CustomNodeData {
  label: string;
  color: string;
  avatar: string;
  department: string;
  description: string;
  [key: string]: unknown;
}

const handleStyle = {
  width: 10,
  height: 10,
  backgroundColor: "#1e1b4b",
  border: "2px solid #7c3aed",
};

export const CustomNode = ({ data }: NodeProps) => {
  const { label, color, avatar, department, description } =
    data as CustomNodeData;

  return (
    <NodeCard borderColor={color}>
      <Handle
        type="target"
        position={Position.Left}
        style={{ ...handleStyle, borderColor: color }}
      />

      <NodeContent>
        <AvatarWrapper ringColor={color}>
          <Box
            component="img"
            src={avatar}
            alt={label}
            sx={{ width: 32, height: 32 }}
          />
        </AvatarWrapper>

        <NodeTextWrap>
          <Typography
            variant="body2"
            sx={{ fontWeight: 700, color: "text.primary", lineHeight: 1.2 }}
          >
            {label}
          </Typography>
          <Typography
            variant="caption"
            sx={{ color: "text.secondary", lineHeight: 1.3, maxWidth: 150 }}
          >
            {description}
          </Typography>
          <DepartmentBadge badgeColor={color}>{department}</DepartmentBadge>
        </NodeTextWrap>
      </NodeContent>

      <Handle
        type="source"
        position={Position.Right}
        style={{ ...handleStyle, borderColor: color }}
      />
    </NodeCard>
  );
};
