import React from 'react';
import { LayoutGrid, List } from 'lucide-react';
import { Switch } from '@/components/ui/switch';

interface ViewToggleProps {
    viewMode: 'grid' | 'list';
    onToggle: () => void;
    setViewMode: (mode: 'grid' | 'list') => void;
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ viewMode, onToggle, setViewMode }) => {
    return (
        <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">Hiking Trails</h1>

            <div className="flex items-center gap-2">
                <span className="text-sm text-gray-700">Grid</span>
                <Switch
                    checked={viewMode === 'list'}
                    onCheckedChange={onToggle}
                />
                <span className="text-sm text-gray-700">List</span>

                <div className="ml-2 border rounded p-1 flex">
                    <button
                        onClick={() => setViewMode('grid')}
                        className={`p-1 rounded ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}
                    >
                        <LayoutGrid className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setViewMode('list')}
                        className={`p-1 rounded ${viewMode === 'list' ? 'bg-gray-200' : ''}`}
                    >
                        <List className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewToggle;
