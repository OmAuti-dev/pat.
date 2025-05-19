"use client";

import { DesignerModal } from "./designer-modal";
import { useDesigner } from "./designer-context";
import { DeleteConfirmDialog } from "./delete-confirm-dialogue";
import { EmailMarketing } from "./email-marketing";
import ProgressCharts from "./Dashboard/progressCharts";
import Projects from "./Dashboard/Projects";
import Tasks from "./Dashboard/Tasks";
import { Footer } from "../../_components/footer";
import { Navbar } from "../../_components/navbar";

export default function Dashboard() {
  const { selectedDesigner } = useDesigner();

  return (
    <div className="p-3 md:p-6 space-y-6">
      <Navbar />

      {/* Progress Charts */}
      <ProgressCharts />
      {/* Projects Section */}
      <Projects />

      {/* Tasks Table */}
      <Tasks />

      <EmailMarketing />

      <Footer />

      {/* Designer Modal */}
      {selectedDesigner && <DesignerModal />}

      {/* Delete Confirmation Dialog */}
      <DeleteConfirmDialog />
    </div>
  );
}
