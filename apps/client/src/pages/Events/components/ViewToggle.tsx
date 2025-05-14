import React from 'react';
import { Grid2X2, List } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';

interface ViewToggleProps {
    viewMode: 'grid' | 'list';
    setViewMode: (mode: 'grid' | 'list') => void;
    onToggle: () => void;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ viewMode, setViewMode }) => {
    const { t } = useTranslation();

    return (
        <div className="inline-flex rounded-md shadow-sm">
            <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                className={`rounded-r-none ${viewMode === 'grid' ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                onClick={() => setViewMode('grid')}
                aria-label={t('events.viewToggle.gridView')}
            >
                <Grid2X2 size={18} />
                <span className="ml-2 hidden sm:inline">{t('events.viewToggle.grid')}</span>
            </Button>
            <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                className={`rounded-l-none ${viewMode === 'list' ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                onClick={() => setViewMode('list')}
                aria-label={t('events.viewToggle.listView')}
            >
                <List size={18} />
                <span className="ml-2 hidden sm:inline">{t('events.viewToggle.list')}</span>
            </Button>
        </div>
    );
};

export default ViewToggle;
