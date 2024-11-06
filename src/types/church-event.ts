import { GeoLocationWithAdministrativeDetail } from '@/types/map';

enum EventRegistrationFormTemplateType {
  General = 'general',
  None = 'none',
}

enum EventOrganizationHost {
  Local = 'local',
  Other = 'other',
}

enum DayType {
  Sunday = 'sunday',
  Monday = 'monday',
  Tuesday = 'tuesday',
  Wednesday = 'wednesday',
  Thursday = 'thursday',
  Friday = 'friday',
  Saturday = 'saturday',
}

enum MonthlyRepeatType {
  ExactDate = 'exact_date',
  FirstDayType = 'first_day_type',
  SecondDayType = 'second_day_type',
  ThirdDayType = 'third_day_type',
  FourthDayType = 'fourth_day_type',
  LastDayType = 'last_day_type',
}

enum EventLocationType {
  OnlineOnly = 'online',
  ChurchLocation = 'in_person_church',
  OtherLocation = 'in_person_other',
}

enum EventScheduleType {
  NoRepeat = 'one_time',
  RecurringDaily = 'recurring_daily',
  RecurringWeekly = 'recurring_weekly',
  RecurringMonthly = 'recurring_monthly',
}

enum StreamPlatformType {
  Youtube = 'youtube',
  Facebook = 'facebook',
}

enum MeetingPlatformType {
  GoogleMeet = 'google_meet',
  Zoom = 'zoom',
}

enum EventType {
  Individual = 'individual',
  Series = 'series',
}

enum EventCategoryType {
  SabbathSchool = 'SABBATH SCHOOL',
  PrayerMeeting = 'PRAYER MEETING',
  WorshipService = 'WORSHIP SERVICE',
  Evangelistic = 'EVANGELISTIC MEETING',
  Health = 'HEALTH',
  Social = 'SOCIAL',
  Family = 'FAMILY',
  Support = 'SUPPORT',
  Finance = 'FINANCE',
  Music = 'MUSIC',
  WeekOfPrayer = 'WEEK OF PRAYER',
  VacationBibleSchool = 'VACATION BIBLE SCHOOL',
  Others = 'OTHERS',
}

interface EventTiming {
  id: string;
  event_version_id: string;

  // flag for series event add / edit series event item form
  event_type: EventType;
  event_date: string;
  start_time: string;
  end_time: string;

  is_applied_to_all_events: boolean;
  skipped: boolean;

  // == series event fields ===
  title: string;
  is_allowed_online_stream: string;
  live_stream_platform: StreamPlatformType;
  live_stream_link: string;
  meeting_link: string;
  meeting_link_platform: MeetingPlatformType;
  location_type: EventLocationType;
  event_custom_location: GeoLocationWithAdministrativeDetail;
}

interface ChurchEvent {
  id: string;
  event_type: EventType;
  is_archived?: boolean;
  is_featured: boolean;
  has_draft: boolean;
  has_published: boolean;
  website_id: string;
  version_id: string;
  version: number;
  category: EventCategoryType;
  other_category?: string;
  status: 'published' | 'draft';
  image?: {
    id: string;
    key: string;
    alt_text: string;
    category: string;
    name: string;
    mime_type: string;
    size_in_bytes: number;
    url: string;
  };

  title: string;
  description: string;
  additional_info: string;
  organizing_entity_name?: string;
  location_type: EventLocationType;
  time_zone: string;
  schedule_type: EventScheduleType;
  start_date: string;
  end_date: string;
  start_time: string;
  end_time: string;
  live_stream_link?: string;
  live_stream_platform?: StreamPlatformType;
  meeting_link_platform?: MeetingPlatformType;
  meeting_link?: string;
  event_timings: Array<EventTiming>;
  is_allowed_online_stream: boolean;
  event_custom_location: GeoLocationWithAdministrativeDetail & {
    id?: string;
    event_version_id?: string;
  };
  created_at: string;
  updated_at: string;
  has_registration_form: boolean;
  repeat_on?: MonthlyRepeatType;
  registration_form_template?: EventRegistrationFormTemplateType;
  event_host_organization?: EventOrganizationHost;
  weeks: Array<DayType>;
}

export type { ChurchEvent, EventTiming };

export {
  EventType,
  EventCategoryType,
  EventLocationType,
  EventScheduleType,
  StreamPlatformType,
  MeetingPlatformType,
  EventRegistrationFormTemplateType,
  EventOrganizationHost,
  DayType,
  MonthlyRepeatType,
};
