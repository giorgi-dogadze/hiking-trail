import * as React from "react";
import { format } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useTranslation } from "react-i18next";

interface DatePickerProps {
    date: Date | null;
    setDate: (date: Date | null) => void;
    placeholder?: string;
    className?: string;
}

export function DatePicker({ date, setDate, placeholder = "Select date", className }: DatePickerProps) {
    const [open, setOpen] = React.useState(false);
    const { i18n } = useTranslation();

    // Custom handler to close the popover when a date is selected
    const handleSelect = (selectedDate: Date | undefined) => {
        setDate(selectedDate || null);
        setOpen(false); // Close the popover when a date is selected
    };

    // Format date according to the current locale
    const formatDate = (date: Date) => {
        return format(date, "PPP", {
            locale: i18n.language === 'ka' ?
                // Use appropriate date-fns locale import if needed
                undefined : undefined
        });
    };

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground",
                        className
                    )}
                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? formatDate(date) : <span>{placeholder}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-white" align="start">
                <Calendar
                    mode="single"
                    selected={date || undefined}
                    onSelect={handleSelect}
                    initialFocus
                />
            </PopoverContent>
        </Popover>
    );
}
