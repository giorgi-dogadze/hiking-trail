import React from 'react';
import { ChevronRight, Map } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarToggleButtonProps {
    onClick: () => void;
}

const SidebarToggleButton: React.FC<SidebarToggleButtonProps> = ({ onClick }) => {
    return (
        <Button
            variant="default"
            size="sm"
            onClick={onClick}
            className="absolute left-2 top-2 z-20 shadow-md"
        >
            <ChevronRight size={16} className="mr-1" />
            <Map size={14} className="mr-1" />
            Route Info
        </Button>
    );
};

export default SidebarToggleButton;
