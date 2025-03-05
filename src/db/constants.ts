export const pimStringKeys = ['filter_panel_color'] as const;
export type PimStringKey = (typeof pimStringKeys)[number];

export const pimBooleanKeys = ['filter_feature_s_link'] as const;
export type PimBooleanKey = (typeof pimBooleanKeys)[number];

export const pimListKeys = ['filter_cap_to_operate_num', 'filter_cap_to_operate_product'] as const;
export type PimListKey = (typeof pimListKeys)[number];

export const pimUnitKeys = ['filter_max_thrust'] as const;
export type PimUnitKey = (typeof pimUnitKeys)[number];
