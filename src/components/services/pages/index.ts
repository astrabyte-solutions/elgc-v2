import { type ComponentType } from "react";
import { ShutdownsRevampsServicePage } from "./ShutdownsRevampsServicePage";
import { MechanicalEquipmentErectionServicePage } from "./MechanicalEquipmentErectionServicePage";
import { PlantRelocationServicePage } from "./PlantRelocationServicePage";
import { StructuralSteelFabricationServicePage } from "./StructuralSteelFabricationServicePage";
import { IndustrialCivilWorksServicePage } from "./IndustrialCivilWorksServicePage";
import { PipingSystemsServicePage } from "./PipingSystemsServicePage";
import { ElectricalInstrumentationSupportServicePage } from "./ElectricalInstrumentationSupportServicePage";
import { EnvironmentalPollutionControlServicePage } from "./EnvironmentalPollutionControlServicePage";
import { PlantImprovementInspectionServicePage } from "./PlantImprovementInspectionServicePage";
import { EpcProjectManagementServicePage } from "./EpcProjectManagementServicePage";

export const SERVICE_PAGE_MAP: Record<string, ComponentType> = {
  "shutdowns-revamps-plant-modifications": ShutdownsRevampsServicePage,
  "mechanical-equipment-erection": MechanicalEquipmentErectionServicePage,
  "plant-relocation-dismantling": PlantRelocationServicePage,
  "structural-steel-fabrication": StructuralSteelFabricationServicePage,
  "industrial-civil-works": IndustrialCivilWorksServicePage,
  "piping-systems": PipingSystemsServicePage,
  "electrical-instrumentation-support": ElectricalInstrumentationSupportServicePage,
  "environmental-pollution-control": EnvironmentalPollutionControlServicePage,
  "plant-improvement-inspection-rectification": PlantImprovementInspectionServicePage,
  "epc-procurement-project-management": EpcProjectManagementServicePage,
};
