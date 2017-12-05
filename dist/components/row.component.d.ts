import { EventEmitter, OnDestroy } from '@angular/core';
import { DataTable } from './table.component';
export declare class DataTableRow implements OnDestroy {
    dataTable: DataTable;
    item: any;
    index: number;
    expanded: boolean;
    private _selected;
    selectedChange: EventEmitter<{}>;
    rowClicked: EventEmitter<any>;
    rowDoubleClicked: EventEmitter<any>;
    selected: boolean;
    onRowClicked(row: DataTableRow, event: any): void;
    onRowDoubleClicked(row: DataTableRow, event: any): void;
    readonly displayIndex: number;
    getTooltip(): string;
    constructor(dataTable: DataTable);
    ngOnDestroy(): void;
    readonly _this: this;
}
