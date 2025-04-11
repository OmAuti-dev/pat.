"use client"

import type React from "react"

import { useState } from "react"
import { MoreHorizontal, ArrowUp, ArrowDown, Mail, Users, MousePointer, BarChart3 } from "lucide-react"
import { ProgressBar } from "./progress-bar"

interface EmailCampaign {
  id: string
  name: string
  status: "sent" | "draft" | "scheduled"
  sentDate?: string
  scheduledDate?: string
  openRate: number
  clickRate: number
  recipients: number
  change?: {
    type: "increase" | "decrease"
    value: number
  }
}

export function EmailMarketing() {
  const [activeTab, setActiveTab] = useState<"campaigns" | "performance">("campaigns")

  const campaigns: EmailCampaign[] = [
    {
      id: "1",
      name: "Weekly Newsletter",
      status: "sent",
      sentDate: "2023-05-15",
      openRate: 68,
      clickRate: 42,
      recipients: 2547,
      change: {
        type: "increase",
        value: 12,
      },
    },
    {
      id: "2",
      name: "Product Launch",
      status: "sent",
      sentDate: "2023-05-10",
      openRate: 75,
      clickRate: 53,
      recipients: 1893,
      change: {
        type: "increase",
        value: 8,
      },
    },
    {
      id: "3",
      name: "Summer Sale",
      status: "scheduled",
      scheduledDate: "2023-06-01",
      openRate: 0,
      clickRate: 0,
      recipients: 3200,
    },
    {
      id: "4",
      name: "Customer Feedback",
      status: "draft",
      openRate: 0,
      clickRate: 0,
      recipients: 0,
    },
  ]

  const metrics = [
    {
      title: "Total Subscribers",
      value: "8,942",
      icon: <Users className="h-5 w-5" />,
      change: {
        type: "increase" as const,
        value: 12.5,
      },
    },
    {
      title: "Avg. Open Rate",
      value: "64.8%",
      icon: <Mail className="h-5 w-5" />,
      change: {
        type: "increase" as const,
        value: 3.2,
      },
    },
    {
      title: "Avg. Click Rate",
      value: "42.1%",
      icon: <MousePointer className="h-5 w-5" />,
      change: {
        type: "decrease" as const,
        value: 1.8,
      },
    },
    {
      title: "Conversion Rate",
      value: "12.3%",
      icon: <BarChart3 className="h-5 w-5" />,
      change: {
        type: "increase" as const,
        value: 5.7,
      },
    },
  ]

  return (
    <div className="bg-card rounded-lg border border-border overflow-hidden">
      <div className="p-4 border-b border-border">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Reports and Analytics</h2>
          <button>
            <MoreHorizontal className="h-5 w-5 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border">
        <button
          className={`px-4 py-3 text-sm font-medium ${activeTab === "campaigns" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}
          onClick={() => setActiveTab("campaigns")}
        >
          Campaigns
        </button>
        <button
          className={`px-4 py-3 text-sm font-medium ${activeTab === "performance" ? "border-b-2 border-primary text-primary" : "text-muted-foreground"}`}
          onClick={() => setActiveTab("performance")}
        >
          Performance
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {activeTab === "campaigns" ? (
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <CampaignCard key={campaign.id} campaign={campaign} />
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {metrics.map((metric, index) => (
                <MetricCard key={index} {...metric} />
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-sm font-medium">Monthly Performance</h3>
              <div className="h-64 w-full bg-accent/30 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Chart Placeholder</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function CampaignCard({ campaign }: { campaign: EmailCampaign }) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "sent":
        return "bg-emerald-500"
      case "scheduled":
        return "bg-amber-500"
      case "draft":
        return "bg-blue-500"
      default:
        return "bg-gray-500"
    }
  }

  const formatDate = (dateString?: string) => {
    if (!dateString) return ""
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  return (
    <div className="p-4 border border-border rounded-lg">
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="font-medium">{campaign.name}</h3>
          <div className="flex items-center gap-2 mt-1">
            <span className={`w-2 h-2 rounded-full ${getStatusColor(campaign.status)}`}></span>
            <span className="text-xs text-muted-foreground capitalize">
              {campaign.status}
              {campaign.status === "sent" && campaign.sentDate && ` on ${formatDate(campaign.sentDate)}`}
              {campaign.status === "scheduled" &&
                campaign.scheduledDate &&
                ` for ${formatDate(campaign.scheduledDate)}`}
            </span>
          </div>
        </div>
        {campaign.change && (
          <div
            className={`flex items-center gap-1 text-xs ${campaign.change.type === "increase" ? "text-emerald-500" : "text-red-500"}`}
          >
            {campaign.change.type === "increase" ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
            <span>{campaign.change.value}%</span>
          </div>
        )}
      </div>

      {campaign.status === "sent" && (
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Open Rate</span>
              <span className="font-medium">{campaign.openRate}%</span>
            </div>
            <ProgressBar progress={campaign.openRate} color="bg-blue-500" />
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Click Rate</span>
              <span className="font-medium">{campaign.clickRate}%</span>
            </div>
            <ProgressBar progress={campaign.clickRate} color="bg-pink-500" />
          </div>

          <div className="flex justify-between text-xs text-muted-foreground pt-2">
            <span>Recipients</span>
            <span>{campaign.recipients.toLocaleString()}</span>
          </div>
        </div>
      )}

      {campaign.status !== "sent" && (
        <div className="flex justify-between text-xs text-muted-foreground pt-2">
          <span>Recipients</span>
          <span>{campaign.recipients > 0 ? campaign.recipients.toLocaleString() : "Not set"}</span>
        </div>
      )}
    </div>
  )
}

function MetricCard({
  title,
  value,
  icon,
  change,
}: {
  title: string
  value: string
  icon: React.ReactNode
  change: { type: "increase" | "decrease"; value: number }
}) {
  return (
    <div className="p-4 border border-border rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">{icon}</div>
        <div
          className={`flex items-center gap-1 text-xs ${change.type === "increase" ? "text-emerald-500" : "text-red-500"}`}
        >
          {change.type === "increase" ? <ArrowUp className="h-3 w-3" /> : <ArrowDown className="h-3 w-3" />}
          <span>{change.value}%</span>
        </div>
      </div>
      <h3 className="text-sm text-muted-foreground">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  )
}

