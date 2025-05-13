import { Equipment, AvailabilityStatus } from '../equipments.data';
import { EquipmentFilterOptions } from '../components/EquipmentFilters';


// TODO: I have bug on season filtering
export const filterEquipments = (equipments: Equipment[], filters: EquipmentFilterOptions): Equipment[] => {
    return equipments.filter(equipment => {
        // Search filter
        if (filters.search) {
            const searchTerm = filters.search.toLowerCase();
            const nameMatch = equipment.name.toLowerCase().includes(searchTerm);
            const tagMatch = equipment.tags.some(tag => tag.toLowerCase().includes(searchTerm));
            const descriptionMatch = equipment.description.toLowerCase().includes(searchTerm);
            
            if (!(nameMatch || tagMatch || descriptionMatch)) {
                return false;
            }
        }
        
        // Category filter
        if (filters.category !== 'all' && equipment.categoryId !== filters.category) {
            return false;
        }
        
        // Brand filter
        if (filters.brand !== 'all' && equipment.brandId !== filters.brand) {
            return false;
        }
        
        // Season rating filter - Fix: Compare with the enum value directly
        if (filters.seasonRating !== 'all' && equipment.seasonRating !== filters.seasonRating) {
            return false;
        }
        
        // Price range filter
        if (filters.priceRange !== 'all') {
            const price = equipment.price.discountAmount || equipment.price.amount;
            
            switch (filters.priceRange) {
                case 'under100':
                    if (price >= 100) return false;
                    break;
                case '100to200':
                    if (price < 100 || price > 200) return false;
                    break;
                case '200to500':
                    if (price < 200 || price > 500) return false;
                    break;
                case 'over500':
                    if (price <= 500) return false;
                    break;
            }
        }
        
        // Availability filter - Fix: Direct comparison with enum values
        if (filters.availability !== 'all') {
            const statusMap = {
                'inStock': AvailabilityStatus.IN_STOCK,
                'lowStock': AvailabilityStatus.LOW_STOCK,
                'outOfStock': AvailabilityStatus.OUT_OF_STOCK,
                'preOrder': AvailabilityStatus.PRE_ORDER
            };
            
            const targetStatus = statusMap[filters.availability as keyof typeof statusMap];
            if (equipment.stock.status !== targetStatus) {
                return false;
            }
        }
        
        return true;
    });
};
